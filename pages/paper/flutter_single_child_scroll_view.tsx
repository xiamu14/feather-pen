import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import PaperWrapper from "@src/components/paper_wrapper";

export default function FlutterSingleChildScrollView() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="Flutter 布局之 SingleChildScrollView"
          // nav={nav}
          description={
            <>
              <h2>Flutter 布局之 SingleChildScrollView</h2>
              <p>
                Flutter中的<mark>SingleChildScrollView</mark>
                是能够滚动展示更多内容的组件，它只能接收一个子组件。
              </p>
              <p>
                通常<mark>SingleChildScrollView</mark>
                只应在期望的内容不会超过屏幕太多时使用，这是因为
                <mark>SingleChildScrollView</mark>
                不支持基于Sliver的延迟实例化模型，所以如果预计视口可能包含超出屏幕尺寸太多的内容时，那么使用
                <mark>SingleChildScrollView</mark>
                将会非常昂贵（性能差），此时应该使用一些支持Sliver延迟加载的可滚动组件，如ListView。
              </p>
            </>
          }
        >
          <h2 id="intro">
            常用的参数
            <a className="anchor" href="#intro">
              #
            </a>
          </h2>
          <Code lang="dart" code={snippets.definition}></Code>
          <h2>基于 silver 的延迟构建</h2>
          <p>
            通常可滚动组件的子组件可能会非常多、占用的总高度也会非常大；如果要一次性将子组件全部构建出将会非常昂贵！为此，Flutter中提出一个Sliver（中文为”薄片“的意思）概念，如果一个可滚动组件支持Sliver模型，那么该滚动可以将子组件分成好多个”薄片“（Sliver），只有当Sliver出现在视口中时才会去构建它，这种模型也称为”基于Sliver的延迟构建模型“。可滚动组件中有很多都支持基于Sliver的延迟构建模型，如ListView、GridView，但是也有不支持该模型的，如SingleChildScrollView。
          </p>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}

const snippets = {
  definition: `SingleChildScrollView({
    this.scrollDirection = Axis.vertical, //滚动方向，默认是垂直方向
    this.reverse = false, //决定可滚动组件的初始滚动位置是在“头”还是“尾”，false在“头”，true在“尾”
    this.padding, //内边距
    bool primary, //是否使用widget树中默认的PrimaryScrollController
    this.physics, //决定可滚动组件如何响应用户操作，滑动到边界时，出现弹性（ios）还是微光（android）
    this.controller,//接受一个ScrollController对象。ScrollController的主要作用是控制滚动位置和监听滚动事件。默认是PrimaryScrollController。
    this.child,//子控件，只能包含一个。
  })`,
};
