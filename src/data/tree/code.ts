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

export default codes;
