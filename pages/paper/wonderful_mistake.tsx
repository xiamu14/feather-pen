import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Picture from "@src/components/paper_image";
import PaperWrapper from "@src/components/paper_wrapper";

export default function Article() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="各种奇妙的错误"
          description={
            <>
              <h2>各种奇妙的错误</h2>
            </>
          }
        >
          <h2>开发环境</h2>
          <h3>1. 在 mac m1 上安装 node-sass</h3>
          <p>这是一件艰难的事，那么请按照下面的步骤检查和操作</p>
          <h4>检查 node 版本</h4>
          <p>
            在 yarn.lock 或 npm.lock 中检查 node-sass
            的版本，参考下面的表格确定对应的 node 版本。
          </p>
          <p>
            <Picture
              src="/paper/images/node-sass.png"
              scale="0.96"
              width="1190"
              height="662"
              border="false"
            ></Picture>
          </p>
          <p>建议使用 volta 来管理 node 版本，并在代码中固定 node 版本。</p>
          <h4>Command Line Tool 使用 Rosetta 模式运行</h4>
          <p>
            <Picture
              src="/paper/images/rosetta.jpeg"
              scale="0.6"
              width="754"
              height="1522"
              border="false"
            ></Picture>
          </p>
          <blockquote>
            <p>
              如果遇到 python2 : command not found 。那大概是因为 mac 在最新的
              Monterey 12.3 版本里去掉了系统的 python2 ，所以需要重新安装
              python2 版本。有两种选择：pyenv
              安装，但可能出现能下载安装，却无法找到 python2 ，应该是 mac
              Monterey 12.3 版本做的调整，pyenv
              还没更新支持。另一种选择是从官网下载特定的安装包，此方案可行。
            </p>
          </blockquote>
          <h2>代码</h2>
          <h3>1. 小程序框架 Taro 丢失组件样式</h3>
          <ul>
            <li>
              复现步骤：在 src 目录下，如果没有
              app.scss，且一个组件被多个页面使用，那么该组件的样式会丢失。
            </li>
            <li>
              解决方案：把 app.scss 加回来，即使是空文件也可以修复此问题。
            </li>
          </ul>
          <h2>Git</h2>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
