import PaperArticle, { Nav } from "../components/paper_article";
import Code from "../components/paper_code";
import PaperWrapper from "../components/paper_wrapper";
import codes from "../data/tree/code";

const nav: Nav[] = [
  {
    key: "traverse",
    title: "遍历树结构",
    children: [
      {
        key: "methods",
        title: "遍历方法介绍",
      },
    ],
  },
];

export default function NTree() {
  return (
    <PaperWrapper>
      <PaperArticle
        title="N 叉树数据结构"
        nav={nav}
        description={
          <>
            <h2 id="intro">
              N叉树介绍
              <a className="anchor" href="#intro">
                #
              </a>
            </h2>
          </>
        }
      >
        <h2>遍历树结构</h2>
        <p>
          树结构的常用场景之一就是遍历，而遍历又分为广度优先遍历、深度优先遍历。其中深度优先遍历是可递归的，而广度优先遍历是非递归的，通常用循环来实现。深度优先遍历又分为先序遍历、后序遍历，二叉树还有中序遍历，实现方法可以是递归，也可以是循环。
        </p>
        <h3>遍历方法介绍</h3>
        <ul>
          <li>
            <mark>深度优先</mark>
            ，访问完一颗子树再去访问后面的子树，而访问子树的时候，先访问根再访问根的子树，称为先序遍历；先访问子树再访问根，称为后序遍历。
          </li>
          <li>
            <mark>广度优先</mark>，即访问树结构的第n+1层前必须先访问完第n层
          </li>
        </ul>
        <Code lang="jsx" code={codes.base} />
      </PaperArticle>
    </PaperWrapper>
  );
}
