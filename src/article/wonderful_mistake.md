{
"title":"各种奇妙的错误",
"updatedAt":"2022-03-16",
"excerpt":"收集各种意想不到的编程错误，关于代码、开发工具/环境、Git 等",
"published":true
}

---

## 各种奇妙的错误

---

## 开发环境

### 1. 在 mac m1 上安装 node-sass

这是一件艰难的事，那么请按照下面的步骤检查和操作

#### 检查 node 版本

在 yarn.lock 或 npm.lock 中检查 node-sass 的版本，参考下面的表格确定对应的 node 版本。

![](/paper/images/node-sass.png?w=1190&h=662)

建议使用 volta 来管理 node 版本，并在代码中固定 node 版本。

#### Command Line Tool 使用 Rosetta 模式运行

![](/paper/images/rosetta.jpeg?w=754&h=1522&scale=0.6)

> 如果遇到 python2 : command not found 。那大概是因为 mac 在最新的 Monterey 12.3 版本里去掉了系统的 python2 ，所以需要重新安装 python2 版本。有两种选择：pyenv 安装，但可能出现能下载安装，却无法找到 python2 ，应该是 mac Monterey 12.3 版本做的调整，pyenv 还没更新支持。另一种选择是从官网下载特定的安装包，此方案可行。

## 代码

### 1. 小程序框架 Taro 丢失组件样式

- 复现步骤：在 src 目录下，如果没有 app.scss。如果一个组件被多个页面使用，那么该组件的样式会丢失。
- 解决方案：把 app.scss 加回来，即使是空文件也可以修复此问题。

## Git
