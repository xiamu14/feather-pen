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
          title="Flutter Basic"
          description={
            <>
              <p>Flutter 基础</p>
            </>
          }
        >
          <h2>Widget 分类</h2>
          <p>
            <Picture
              src="/paper/images/widget-classify.png"
              scale="0.96"
              width="2038"
              height="940"
              border="false"
            ></Picture>
          </p>
          <h2>Stateful Widget 生命周期</h2>
          <p>
            <Picture
              src="/paper/images/state_function.png"
              scale="0.96"
              width="1334"
              height="744"
              border="false"
            ></Picture>
          </p>
          <h2>根 Widget 的种类</h2>
          <ul>
            <li>MaterialApp: Material Design 风格的 Widget</li>
            <li>CupertinoApp: iOS 风格的 Widget</li>
            <li>WidgetsApp: 自定义风格的 Widget</li>
          </ul>
          <p>一般使用 MaterialApp 作为根 Widget 可以是实现大部分应用。</p>
          <h2>基础 Widget</h2>
          <p>
            <Picture
              src="/paper/images/basics-widget.png"
              scale="0.96"
              width="1968"
              height="918"
              border="false"
            ></Picture>
          </p>
          <h2>Image, Text 和 Icon</h2>
          <h3>Image</h3>
          <p>
            <Code
              lang="dart"
              code={`// decoration image
Center(
  child: Container(
    width: 305.w, // 使用 flutter_screenutil
    height: 246.w,
    decoration: const BoxDecoration(
      image: DecorationImage(
        image: AssetImage('assets/images/404.png'), // NetworkImage()
        fit: BoxFit.cover,
      ),
    ),
  ),
),

// local image
Image.asset(
  'assets/images/404.png',
  fit: BoxFit.contain,
  width: 305.w,
  height: 246.w,
),

// network image
Image.network(
  'https://images.unsplash.com/photo-1642284434620-08a0c1ea3b52?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80',
  fit: BoxFit.cover,
  width: 305.w,
  height: 246.w,
)

// circle clip image
CircleAvatar()`}
            />
          </p>
          <h3>Text</h3>
          <ul>
            <li>
              softWrap：是否自动换行，若为
              false，文字将不考虑容器大小，单行显示，超出屏幕部分将默认截断处理
            </li>
            <li>overflow：当文字超出屏幕的时候，如何处理;截断，渐隐，省略号</li>
            <li>maxLines：最大行数设置</li>
          </ul>
          <h2>Icon</h2>
          <p>使用 flutter_svg 显示 svg 图片（或者看下 flutter_svg_provider）</p>
          <h2>SingleChildScrollView</h2>
          <p>滚动页面</p>
          <h2>Hero</h2>
          <p>自动缩放动画的组件</p>
          <h2>ListView</h2>
          <p>滚动列表容器组件</p>
          <h2>GridView</h2>
          <p>网格列表容器组件</p>
          <h2>PageView</h2>
          <p>用于轮播滚动容器组件</p>
          <ul>
            <li>PageView.builder</li>
            <li>PageView.custom</li>
          </ul>
          <h2>Opacity</h2>
          <p>调整透明度组件</p>
          <h2>Spacer 和 Expanded</h2>
          <h2>GestureDetector</h2>
          <p>用户手势检测组件，可以给组件添加手势（点击，滑动等）事件</p>
          <h2>Material</h2>
          <p>
            <Code
              lang="dart"
              code={`Hero(
  tag: doctor!.doctorName,
  child: Material(
    color: Colors.transparent,
    child: Text(
      doctor!.doctorName,
      overflow: TextOverflow.ellipsis,
      maxLines: 1,
      style: Theme.of(context).textTheme.headline4,
    ),
  ),
),`}
            />
          </p>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
