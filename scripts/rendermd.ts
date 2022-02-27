import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
var result = md.render("# markdown-it rulezz!");

console.log(result);
