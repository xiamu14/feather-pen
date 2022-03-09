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
          title="dart 基础"
          description={
            <>
              <h2>Dart 编程语言介绍</h2>
              <p>Dart 是一个为全平台构建快速应用的客户端优化的编程语言。</p>
              <p>
                <Picture
                  src="/paper/dart_basic/0.png"
                  width="2290"
                  height="1204"
                ></Picture>
              </p>
            </>
          }
        >
          <h2>变量与常量</h2>
          <p>
            <Code
              lang="javascript"
              code='console.log("hello world");
'
            />
          </p>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
