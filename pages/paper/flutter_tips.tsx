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
                  width="725"
                  height="434"
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
}
`}
                />
              </p>
              <h2>2. Optimize code</h2>
              <h3>Create widgets configurations</h3>
              <p>
                <Picture
                  src="/paper/images/create_widgets_configurations.jpeg"
                  width="1600"
                  height="900"
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
await storage.write(key:key, value:value);
`}
                />
              </p>
              <h2>3. Cool Style</h2>
              <h3>Glass Effect</h3>
              <p>
                <Picture
                  src="/paper/images/glass_effect.jpeg"
                  width="1728"
                  height="895"
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
)
`}
                />
              </p>
              <h2>4. Package</h2>
              <h2>Source Code Analyze</h2>
            </>
          }
        ></PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
