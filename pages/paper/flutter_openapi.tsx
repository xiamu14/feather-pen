import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import Picture from "@src/components/paper_image";
import PaperWrapper from "@src/components/paper_wrapper";

export default function Article() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="使用 openApi 生成 Flutter API"
          description={
            <>
              <h2>使用 openApi generator 生成 API 代码</h2>
              <p>
                <Picture
                  src="/paper/images/openapi_flutter.png"
                  scale="0.96"
                  width="1568"
                  height="554"
                  border="false"
                ></Picture>
              </p>
            </>
          }
        >
          <h2>安装 openapi generator</h2>
          <p>mac 用户推荐使用 brew 安装</p>
          <p>
            <Code lang="bash" code={`brew install openapi-generator`} />
          </p>
          <h2>配置 flutter project</h2>
          <p>
            建议将生成的代码放在和 app 代码同层级的目录中管理，这样在 app
            代码里引用本地包的方式，从而保持 app 代码简洁。在 pubspec.yaml
            中这样引入本地包。
          </p>
          <p>
            <Code
              lang="yaml"
              code={`dependencies:
  openapi:
    path: ../{appName}_api/`}
            />
          </p>
          <p>然后新建 api.dart 文件，写入如下代码：</p>
          <p>
            <Code
              lang="dart"
              code={`import 'package:openapi/openapi.dart';

final api = Openapi(
  basePathOverride:
      "https://ckzkq7aob142251701s6jejplin7-server-vn57etnuya-ue.a.run.app",
);`}
            />
          </p>
          <h2>生成命令</h2>
          <p>
            <Code
              lang="bash"
              code={`openapi-generator generate -i https://xxx/api-json -g dart-dio-next -o ./`}
            />
          </p>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
