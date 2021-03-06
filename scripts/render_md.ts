import { load } from "cheerio";
import chokidar from "chokidar";
import colors from "colors";
import crypto from "crypto";
import { readFileSync, statSync, writeFileSync } from "fs";
import MarkdownIt from "markdown-it";
import path from "path";
import prettier from "prettier";
import rd from "rd";
import { URLSearchParams } from "url";
const md = new MarkdownIt();

const rootDir = process.cwd();

const template = readFileSync(
  path.resolve(rootDir, "scripts/template.handlebars"),
  "utf-8"
);

const articleMd5String = readFileSync(
  path.resolve(rootDir, "scripts/md5.json"),
  "utf-8"
);

const articleListOldString = readFileSync(
  path.resolve(rootDir, "src/article_list.json"),
  "utf-8"
);

const articleListOld: any[] = JSON.parse(articleListOldString);

const articleMd5 = JSON.parse(articleMd5String);

const articleList: any[] = [];

chokidar.watch("./src/article/*.md").on("all", (event, path) => {
  // console.log(event, path);
  renderMd();
});

function renderMd() {
  // 异步列出目录下的所有文件
  rd.read("src/article", function (err, files) {
    if (err) throw err;
    files?.forEach((file) => {
      const fileStat = statSync(file);
      if (fileStat.isFile()) {
        const articleName = path.basename(file).replace(path.extname(file), "");

        const articleContent = readFileSync(file, "utf-8");

        // TODO: 计算内容的 md5
        const hash = crypto.createHash("md5");

        hash.update(articleContent, "utf8");
        const md5 = hash.digest("hex");

        if (
          !(articleName in articleMd5) ||
          (articleName in articleMd5 && articleMd5[articleName] !== md5)
        ) {
          console.log(colors.cyan(`生成文章:${articleName}`));
          articleMd5[articleName] = md5;
          const result = md.render(articleContent, {});
          parseHtml(result, articleName);
        }
      }
    });

    const articleListNoChanged = articleListOld.filter((item) => {
      return articleList.every((it) => it.title !== item.title);
    });

    const finalArticleList = [...articleListNoChanged, ...articleList];

    writeFileSync(
      path.resolve(rootDir, `src/article_list.json`),
      `${JSON.stringify(finalArticleList, null, "\t")}`
    );
    writeFileSync(
      path.resolve(rootDir, "scripts/md5.json"),
      `${JSON.stringify(articleMd5, null, "\t")}`
    );
  });
}

function parseHtml(html: string, articleName: string) {
  // 分割
  const parts = html.split("<hr>");

  const [originalMeta, originalDesc, ...originalContents] = parts;

  try {
    const meta = parseMeta(originalMeta);
    const descHtml = parseAll(originalDesc);
    const contentHtml = parseAll(originalContents.join("<hr>"));

    const article = template
      .replace("{{title}}", meta.title)
      .replace("{{desc}}", descHtml)
      .replace("{{content}}", contentHtml)
      .replaceAll("<picture", "<Picture")
      .replaceAll("</picture>", "</Picture>")
      .replaceAll("<code", "<Code>")
      .replaceAll("</code>", "</Code>")
      .replaceAll(/<\/?body>/g, "")
      .replaceAll(/<\/?pre>/g, "");

    const formatArticle = prettier.format(article);
    // NOTE: 这里写入时应该做更新的
    const articleHref = `/${articleName}`;
    const index = articleList.findIndex((it) => it.href === articleHref);
    if (index) {
      articleList[index] = {
        href: articleHref,
        ...meta,
      };
    } else {
      articleList.push({
        href: articleHref,
        ...meta,
      });
    }
    writeFileSync(
      path.resolve(rootDir, `pages/paper/${articleName}.tsx`),
      `${formatArticle}`
    );
    // 解析模板
  } catch (error) {}
}

function parseMeta(html: string) {
  const $ = load(html);
  const middleMeta = $.text().replaceAll("&quot;", '"');
  try {
    // console.log(middleMeta);
    const meta = JSON.parse(middleMeta);
    // console.log(meta);
    return meta;
  } catch (error) {
    throw error;
  }
}

function parseAll(html: string) {
  const $ = load(html);
  const imgs = $("img");
  imgs.map((_, element) => {
    const srcMeta = $(element).attr("src")?.split("?");
    if (srcMeta?.length === 2) {
      const imageUrlSearchParams = new URLSearchParams(srcMeta[1]);
      const width = imageUrlSearchParams.get("w");
      const height = imageUrlSearchParams.get("h");
      const border =
        imageUrlSearchParams.get("border") === "true" ? true : false;
      const scale = imageUrlSearchParams.get("scale") || "0.96";
      console.log(width, height, border, scale);
      const src = srcMeta?.[0];

      $(element).replaceWith(
        `<Picture src="${src}" scale="${scale}" width="${width}" height="${height}" border="${border}" />`
      );
    } else {
      console.log("图片缺少宽高");
    }
  });
  const pres = $("pre");
  pres.map((_, element) => {
    const code = $(element).find("code");
    const codeText = code.text().replace(/\n$/, "");
    const language =
      code.attr("class")?.match(/language-([a-z]+)/)?.[1] ?? "js";
    $(element).text(
      `<p><Code lang="${language}" code={\`${codeText}\`} /></p>`
    );
  });

  return $.html("body").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
