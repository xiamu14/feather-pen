{
"title":"Flutter Basic",
"updatedAt":"2022-03-20",
"excerpt":"Flutter Basic",
"published":true
}

---

Flutter 基础

---

## Widget 分类

![](/paper/images/widget-classify.png?w=2038&h=940)

## Stateful Widget 生命周期

![](/paper/images/state_function.png?w=1334&h=744)

## 根 Widget 的种类

- MaterialApp: Material Design 风格的 Widget
- CupertinoApp: iOS 风格的 Widget
- WidgetsApp: 自定义风格的 Widget

一般使用 MaterialApp 作为根 Widget 可以是实现大部分应用。

## 基础 Widget

![](/paper/images/basics-widget.png?w=1968&h=918)

## Image, Text 和 Icon

### Image

```dart
// decoration image
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
  'https://images.unsplash.com/photo-1642284434620-08a0c1ea3b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  fit: BoxFit.cover,
  width: 305.w,
  height: 246.w,
)

// circle clip image
CircleAvatar()
```

### Text

- softWrap：是否自动换行，若为 false，文字将不考虑容器大小，单行显示，超出屏幕部分将默认截断处理
- overflow：当文字超出屏幕的时候，如何处理;截断，渐隐，省略号
- maxLines：最大行数设置

## Icon

使用 flutter_svg 显示 svg 图片（或者看下 flutter_svg_provider）

## SingleChildScrollView

滚动页面

## Hero

自动缩放动画的组件

## ListView

滚动列表容器组件

## GridView

网格列表容器组件

## PageView

用于轮播滚动容器组件

- PageView.builder
- PageView.custom

## Opacity

调整透明度组件

## Spacer 和 Expanded

## GestureDetector

用户手势检测组件，可以给组件添加手势（点击，滑动等）事件

## Material

```dart
Hero(
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
),
```
