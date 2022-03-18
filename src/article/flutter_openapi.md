{
"title":"使用 openApi 生成 Flutter API",
"updatedAt":"2022-03-12",
"excerpt":"Flutter Tips Collection",
"published":true
}

---

## 使用 openApi generator 生成 API 代码

![](/paper/images/openapi_flutter.png?w=1568&h=554)

---

## 安装 openapi generator

mac 用户推荐使用 brew 安装

```js
brew install openapi-generator
```

## 配置 flutter project

建议将生成的代码放在和 app 代码同层级的目录中管理，这样在 app 代码里引用本地包的方式，从而保持 app 代码简洁。在 pubspec.yaml 中这样引入本地包

```js
dependencies:
  openapi:
    path: ../{appName}_api/
```

然后新建 api.dart 文件，写入如下代码：

```dart
import 'package:openapi/openapi.dart';

final api = Openapi(
  basePathOverride:
      "https://ckzkq7aob142251701s6jejplin7-server-vn57etnuya-ue.a.run.app",
);
```

## 生成命令

openapi-generator generate -i https://xxx/api-json -g dart-dio-next -o ./
