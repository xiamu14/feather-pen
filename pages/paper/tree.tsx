import PageWrapper from "@src/components/page_wrapper";
import PaperArticle, { Nav } from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import PaperWrapper from "@src/components/paper_wrapper";
import codes from "@src/data/tree/code";

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
    <PageWrapper>
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
              <p>
                在计算机科学中，树是一种十分重要的数据结构。树被描述为一种分层数据抽象模型，常用来描述数据间的层级关系和组织结构。树也是一种非顺序的数据结构。
              </p>
              <p>
                在介绍如何用JavaScript实现树之前，我们先介绍一些和树相关的术语。如上图所示，一棵完整的树包含一个位于树顶部的节点，称之为根节点（11），它没有父节点。树中的每一个元素都叫做一个节点，节点分为内部节点（图中显示为黄色的节点）和外部节点（图中显示为灰色的节点），至少有一个子节点的节点称为内部节点，没有子元素的节点称为外部节点或叶子节点。一个节点可以有祖先（根节点除外）和后代。子树由节点本身和它的后代组成，如上图中三角虚框中的部分就是一棵子树。节点拥有的子树的个数称之为节点的度，如上图中除叶子节点的度为0外，其余节点的度都为2。从根节点开始，根为第1层，第一级子节点为第2层，第二级子节点为第3层，以此类推。树的高度（深度）由树中节点的最大层级决定（上图中树的高度为4）。
              </p>
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
    </PageWrapper>
  );
}
