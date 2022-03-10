import { load } from "cheerio";
import { readFileSync, statSync, writeFileSync } from "fs";
import MarkdownIt from "markdown-it";
import path from "path";
import prettier from "prettier";
import rd from "rd";
const md = new MarkdownIt();

const rootDir = process.cwd();

const template = readFileSync(
  path.resolve(rootDir, "scripts/template.handlebars"),
  "utf-8"
);

const articleList: any[] = [];

// 异步列出目录下的所有文件
rd.read("src/article", function (err, files) {
  if (err) throw err;
  files?.forEach((file) => {
    const fileStat = statSync(file);
    if (fileStat.isFile()) {
      const articleName = path.basename(file).replace(path.extname(file), "");

      const articleContent = readFileSync(file, "utf-8");

      const result = md.render(articleContent, {});
      console.log(result);
      parseHtml(result, articleName);
    }
  });
  writeFileSync(
    path.resolve(rootDir, `src/article_list.json`),
    `${JSON.stringify(articleList, null, "\t")}`
  );
});

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
    articleList.push({
      href: `/${articleName}`,
      ...meta,
    });
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
    const src = srcMeta?.[0];
    const metaArray = srcMeta?.[1].split("&").map((item) => {
      return item.split("=");
    });
    const meta = { w: metaArray?.[0][1], h: metaArray?.[1][1] };
    $(element).replaceWith(
      `<Picture src="${src}" width="${meta.w}" height="${meta.h}" />`
    );
  });
  const pres = $("pre");
  pres.map((_, element) => {
    const code = $(element).find("code");
    const language =
      code.attr("class")?.match(/language-([a-z]+)/)?.[1] ?? "js";
    $(element).text(`<p><Code lang="${language}" code='${code.text()}' /></p>`);
  });

  return $.html("body").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
