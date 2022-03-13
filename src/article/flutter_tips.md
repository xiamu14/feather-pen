{
"title":"Flutter Tips",
"updatedAt":"2022-03-12",
"excerpt":"Flutter Tips Collection",
"published":true
}

---

flutter tips collection.

## ![](/paper/images/flutter_tips_excerpt.svg?w=725&h=434)

## 1. Custom Widget

### Spacing design 8 rule

#### What is the 8 rule?

The theory is quite simple: the idea is that all the elements in your design are a multiple of 8 in terms of width and height, just as their spacing.

```dart
class AppSpacer extends StatelessWidget {
  final double? width;
  final double? height;

  const AppSpacer._({Key? key, this.width, this.height}) : super(key:key);

  factory APpSpacer.p32() => const AppSpacer._(height:32, width:32);
  factory APpSpacer.p24() => const AppSpacer._(height:24, width:24);
  factory APpSpacer.p16() => const AppSpacer._(height:16, width:16);
  factory APpSpacer.p8() => const AppSpacer._(height:8, width:8);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width:width,
      height:height,
    );
  }
}
```

## 2. Optimize code

### Create widgets configurations

![](/paper/images/create_widgets_configurations.jpeg?w=1600&h=900)

keyword：factory

### How to store sensitive data on phone?

Don't locally store passwords or other sensitives data in clear text

Using flutter_secure_storage plugin

```dart
// Create storage
final storage = new FlutterSecureStorage();
// Read value
String value = await storage.read(key:key);
// Write value
await storage.write(key:key, value:value);
```

## 3. Cool Style

### Glass Effect

![](/paper/images/glass_effect.jpeg?w=1728&h=895)

If you've seen that cool Glass effect in UI design and wanted to add it to your app, you can easily do so with the BlackdropFilter widget.

```dart
ClipRect(
  child: BackdropFilter(
    filter: ImageFilter.blur(
      sigmaX: 15,
      sigmaY: 15,
    ),
    child: Child(),
  ),
)
```

## 4. Package

## Source Code Analyze
