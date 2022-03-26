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
          title="Flutter Tips"
          description={
            <>
              <p>flutter tips collection.</p>
              <h2>
                <Picture
                  src="/paper/images/flutter_tips_excerpt.svg"
                  scale="0.96"
                  width="725"
                  height="434"
                  border="false"
                ></Picture>
              </h2>
              <h2>1. Custom Widget</h2>
              <h3>Spacing design 8 rule</h3>
              <h4>What is the 8 rule?</h4>
              <p>
                The theory is quite simple: the idea is that all the elements in
                your design are a multiple of 8 in terms of width and height,
                just as their spacing.
              </p>
              <p>
                <Code
                  lang="dart"
                  code={`class AppSpacer extends StatelessWidget {
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
}`}
                />
              </p>
              <h3>Rounded Corners for Images</h3>
              <p>
                <Code
                  lang="dart"
                  code={`ClipRect(
  borderRadius: BorderRadius.circular(8.0),
  child: Image.network(
    'https://example.com/image.jpg',
    height: 150.0,
    width: 150.0,
    fix: BoxFit.cover,
  ),
)`}
                />
              </p>
              <h3>Theme color widget</h3>
              <p>
                <Code
                  lang="dart"
                  code={`import 'dart:ui';

class AppColors {
  static const Color textColor = Color(0xFFccc7c5);
  static const Color mainColor = Color(0xFF89dad0);
  static const Color iconColor1 = Color(0xFFffd28d);
  static const Color iconColor2 = Color(0xFFfcab88);
  static const Color paraColor = Color(0xFF8f837f);
  static const Color buttonBackgroundColor = Color(0xFFf7f6f4);
  static const Color signColor = Color(0xFFa9a29f);
  static const Color titleColor = Color(0xFF5c524f);
  static const Color mainBlackColor = Color(0xFF332d2b);
  static const Color yellowColor = Color(0xFFffd379);
}`}
                />
              </p>
              <h2>2. Optimize code</h2>
              <h3>Simplify styling code and reduce nesting</h3>
              <p>
                <Code
                  lang="dart"
                  code={`class HStack extends Column {
  HStack(
    this.childList, {
    Key? key,
    MainAxisAlignment main = MainAxisAlignment.start,
    CrossAxisAlignment cross = CrossAxisAlignment.center,
  }) : super(
          key: key,
          children: childList,
          mainAxisAlignment: main,
          crossAxisAlignment: cross,
        );

  final List<Widget> childList;
}

class VStack extends Row {
  VStack(
    this.childList, {
    Key? key,
    MainAxisAlignment main = MainAxisAlignment.start,
    CrossAxisAlignment cross = CrossAxisAlignment.center,
  }) : super(
          key: key,
          children: childList,
          mainAxisAlignment: main,
          crossAxisAlignment: cross,
        );

  final List<Widget> childList;
}

Padding(child, all: 12, top: '12', right: ,bottom: ,left: , vertical: horizontal: )
`}
                />
              </p>
              <h3>Create widgets configurations</h3>
              <p>
                <Picture
                  src="/paper/images/create_widgets_configurations.jpeg"
                  scale="0.96"
                  width="1600"
                  height="900"
                  border="false"
                ></Picture>
              </p>
              <p>keyword：factory</p>
              <h3>How to store sensitive data on phone?</h3>
              <p>
                Don't locally store passwords or other sensitives data in clear
                text
              </p>
              <p>Using flutter_secure_storage plugin</p>
              <p>
                <Code
                  lang="dart"
                  code={`// Create storage
final storage = new FlutterSecureStorage();
// Read value
String value = await storage.read(key:key);
// Write value
await storage.write(key:key, value:value);`}
                />
              </p>
              <h2>3. Cool Style</h2>
              <h3>Glass Effect</h3>
              <p>
                <Picture
                  src="/paper/images/glass_effect.jpeg"
                  scale="0.96"
                  width="1728"
                  height="895"
                  border="false"
                ></Picture>
              </p>
              <p>
                If you've seen that cool Glass effect in UI design and wanted to
                add it to your app, you can easily do so with the
                BlackdropFilter widget.
              </p>
              <p>
                <Code
                  lang="dart"
                  code={`ClipRect(
  child: BackdropFilter(
    filter: ImageFilter.blur(
      sigmaX: 15,
      sigmaY: 15,
    ),
    child: Child(),
  ),
)`}
                />
              </p>
              <h3>Change Text Field Height &amp; Width</h3>
              <p>
                You can change the height and width of the TextField widget
                using the following methods.
              </p>
              <p>
                <Code
                  lang="dart"
                  code={`SizedBox(
  height: 50,
  child: TextField(),
)

TextField(
  decoration: const InputDecoration(
    isDense: true,
    contentPadding: const EdgeInsets.symmetric(
      vertical: 40.0,
      horizontal: 20.0
    ),
  ),
)`}
                />
              </p>
              <h3>Implement Animation Guide</h3>
              <p>
                <Picture
                  src="/paper/images/flutter_tips_animation_guide.jpeg"
                  scale="0.96"
                  width="1019"
                  height="1125"
                  border="true"
                ></Picture>
              </p>
              <h2>4. Package</h2>
              <h2>5. Source Code Analyze</h2>
              <h2>6. Debug And Test</h2>
              <h3>Waiting for another flutter command to release</h3>
              <p>
                Did you ever encounter the following issue while trying to run a
                Flutter app?
              </p>
              <p>This is How to fix it👇</p>
              <p>
                <Code
                  lang="dart"
                  code={`// 1. Try restarting the IDE
// 2. Run following command in terminal
killall -9 dart`}
                />
              </p>
              <h3>Search iOS Simulator Device</h3>
              <p>
                <Code
                  lang="bash"
                  code={`xcrun simctl list | grep '(Booted)'`}
                />
              </p>
            </>
          }
        ></PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
