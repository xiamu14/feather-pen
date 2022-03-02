import PageWrapper from "@src/components/page_wrapper";
import PaperArticle, { Nav } from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import Picture from "@src/components/paper_image";
import PaperWrapper from "@src/components/paper_wrapper";

const nav: Nav[] = [
  {
    key: "intro",
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
          // nav={nav}
          description={
            <>
              <h2>N叉树介绍</h2>
              <p>
                在计算机科学中，树是一种十分重要的数据结构。树被描述为一种分层数据抽象模型，常用来描述数据间的层级关系和组织结构。树也是一种非顺序的数据结构。
              </p>
              <p>
                在开发UI组件，如侧栏菜单、级联选择器、表格、树形选择器等的过程中，我们经常会遇到需要处理数据结构——「Tree」的情况。
              </p>
              <Picture
                src="/paper/tree/0.png"
                metadata={{ w: 1698, h: 680 }}
                border
              />
            </>
          }
        >
          <h2 id="intro">
            遍历树结构
            <a className="anchor" href="#intro">
              #
            </a>
          </h2>
          <p>代码中树结构一般如下：</p>
          <Code lang="jsx" code={codes.base} />
          <h3>遍历方法介绍</h3>
          <p>
            树结构的常用场景之一就是遍历，而遍历又分为广度优先遍历、深度优先遍历。其中深度优先遍历是可递归的，而广度优先遍历是非递归的，通常用循环来实现。深度优先遍历又分为先序遍历、后序遍历，二叉树还有中序遍历，实现方法可以是递归，也可以是循环。
          </p>
          <ul>
            <li>
              <mark>深度优先</mark>
              ，访问完一颗子树再去访问后面的子树，而访问子树的时候，先访问根再访问根的子树，称为先序遍历；先访问子树再访问根，称为后序遍历。
            </li>
            <li>
              <mark>广度优先</mark>，即访问树结构的第n+1层前必须先访问完第n层
            </li>
          </ul>
          <h2>列表和树结构的互相转换</h2>
          <h3>列表转为树</h3>
          <p>
            列表结构通常是在节点信息中给定了父级元素的id，然后通过这个依赖关系将列表转换为树形结构，列表结构是类似于：
          </p>
          <Code lang="javascript" code={codes.list}></Code>
          <p>
            列表结构转为树结构，就是把所有非根节点放到对应父节点的chilren数组中，然后把根节点提取出来：
          </p>
          <Code lang="javascript" code={codes.listToTree}></Code>
          <h3>树转为列表</h3>
          <p>
            有了遍历树结构的经验，树结构转为列表结构就很简单了。不过有时候，我们希望转出来的列表按照目录展示一样的顺序放到一个列表里的，并且包含层级信息。使用先序遍历将树结构转为列表结构是合适的，直接上代码:
          </p>
          <Code lang="javascript" code={codes.treeToList}></Code>
          <h2>树结构筛选</h2>
          <p>
            树结构过滤即保留某些符合条件的节点，剪裁掉其它节点。一个节点是否保留在过滤后的树结构中，取决于它以及后代节点中是否有符合条件的节点。可以传入一个函数描述符合条件的节点:
          </p>
          <Code lang="javascript" code={codes.treeFilter}></Code>
          <h2>树结构查找节点</h2>
          <p>
            查找节点其实就是一个遍历的过程，遍历到满足条件的节点则返回，遍历完成未找到则返回null。类似数组的find方法，传入一个函数用于判断节点是否符合条件，代码如下：
          </p>
          <Code lang="javascript" code={codes.treeFind}></Code>
          <hr></hr>
          <small>
            注：示例中的代码只是用于表达逻辑思维，于实际开发中未必适用，故仅供参考。至关重要的是理解树结构的程序逻辑，并根据实际需求编写代码。
          </small>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}

const codes = {
  base: `let tree = [
    {
      id: "1",
      title: "节点1",
      children: [
        {
          id: "1-1",
          title: "节点1-1",
        },
        {
          id: "1-2",
          title: "节点1-2",
        },
      ],
    },
    {
      id: "2",
      title: "节点2",
      children: [
        {
          id: "2-1",
          title: "节点2-1",
        },
      ],
    },
  ];`,
  list: `let list = [
    {
      id: "1",
      title: "节点1",
      parentId: "",
    },
    {
      id: "1-1",
      title: "节点1-1",
      parentId: "1",
    },
    {
      id: "1-2",
      title: "节点1-2",
      parentId: "1",
    },
    {
      id: "2",
      title: "节点2",
      parentId: "",
    },
    {
      id: "2-1",
      title: "节点2-1",
      parentId: "2",
    },
  ];`,
  listToTree: `function listToTree(list) {
    let info = list.reduce(
      (map, node) => ((map[node.id] = node), (node.children = []), map),
      {}
    );
    return list.filter((node) => {
      info[node.parentId] && info[node.parentId].children.push(node);
      return !node.parentId;
    });
  }`,
  treeToList: `//递归实现
  function treeToList(tree, result = [], level = 0) {
    tree.forEach((node) => {
      result.push(node);
      node.level = level + 1;
      node.children && treeToList(node.children, result, level + 1);
    });
    return result;
  }
  
  // 循环实现
  function treeToList(tree) {
    let node,
      result = tree.map((node) => ((node.level = 1), node));
    for (let i = 0; i < result.length; i++) {
      if (!result[i].children) continue;
      let list = result[i].children.map(
        (node) => ((node.level = result[i].level + 1), node)
      );
      result.splice(i + 1, 0, ...list);
    }
    return result;
  }`,
  treeFilter: `function treeFilter(tree, func) {
    // 使用map复制一下节点，避免修改到原树
    return tree
      .map((node) => ({ ...node }))
      .filter((node) => {
        node.children = node.children && treeFilter(node.children, func);
        return func(node) || (node.children && node.children.length);
      });
  }`,
  treeFind: `function treeFind(tree, func) {
    for (const data of tree) {
      if (func(data)) return data;
      if (data.children) {
        const res = treeFind(data.children, func);
        if (res) return res;
      }
    }
    return null;
  }`,
};
