import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import PaperWrapper from "@src/components/paper_wrapper";

export default function FlutterWidgetScaffold() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="Flutter 布局之 Scaffold"
          // nav={nav}
          description={
            <>
              <h2>Flutter 布局之 Scaffold</h2>
              <p>
                Scaffold定义了一个 UI
                框架，这个框架包含头部导航栏、body、右下角浮动按钮、底部导航栏等。
              </p>
              <p>
                一般来说，总是定义一个 Scaffold 当作实参传入到 MaterialApp 的
                home 属性。换句话说，一个 MaterialApp 总是绑定一个 Scaffold。
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
          <h3>appBar</h3>
          <p>
            这个参数用来定义顶部导航栏，传入一个 <mark>AppBar</mark>{" "}
            实例即可。AppBar 类参数定义如下：
          </p>
          <Code lang="dart" code={snippets.appBarDefinition}></Code>
          <h4>1. leading</h4>
          <p>
            常用到的参数首先是
            leading,这个参数通常是一个图标按钮，用来定义导航栏上左上角的组件，通常是一个图标组件。
          </p>
          <p>
            这里需要注意的是：当同一个 MaterialApp
            内使用路由跳转到一个新界面时，会自动将 leading
            设置为一个返回按钮。（可以自定义 leading 来覆盖）
          </p>
          <h4>2. title</h4>
          <p>
            然后是 title，注意这个 title 是一个 Widget 类型。意味着所有
            Widget组件都可以作为 title，不止是 text。
          </p>
          <h4>3. actions</h4>
          <p>
            下一个属性是 actions,这个参数类型是 Widget 数组，用来将一组
            Widget数组放到右上角。
          </p>
          <h3>body</h3>
          <p>Scaffold 的下一个参数就是 body 了，用来展示 App 的主体部分。</p>
          <h3>bottomNavigationBar</h3>

          <p>
            最后介绍的是 bottomNavigationBar，
            顾名思义，就是底部导航栏，可以传入一个 Flutter 提供的
            BottomNavigationBar
            实例来实现导航栏。如果要实现自定义的底部导航栏需要用到
            BottomAppBar。
          </p>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}

const snippets = {
  appBarDefinition: `AppBar({
    Key? key,
    this.leading,
    this.automaticallyImplyLeading = true,
    this.title,
    this.actions,
    this.flexibleSpace,
    this.bottom,
    this.elevation,
    this.shadowColor,
    this.shape,
    this.backgroundColor,
    this.foregroundColor,
    @Deprecated(
      'This property is no longer used, please use systemOverlayStyle instead. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.brightness,
    this.iconTheme,
    this.actionsIconTheme,
    @Deprecated(
      'This property is no longer used, please use toolbarTextStyle and titleTextStyle instead. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.textTheme,
    this.primary = true,
    this.centerTitle,
    this.excludeHeaderSemantics = false,
    this.titleSpacing,
    this.toolbarOpacity = 1.0,
    this.bottomOpacity = 1.0,
    this.toolbarHeight,
    this.leadingWidth,
    @Deprecated(
      'This property is obsolete and is false by default. '
      'This feature was deprecated after v2.4.0-0.0.pre.',
    )
    this.backwardsCompatibility,
    this.toolbarTextStyle,
    this.titleTextStyle,
    this.systemOverlayStyle,
  }) : assert(automaticallyImplyLeading != null),`,
};
