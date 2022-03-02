import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import Picture from "@src/components/paper_image";
import PaperWrapper from "@src/components/paper_wrapper";

export default function NTree() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="Dart 基础"
          // nav={nav}
          description={
            <>
              <h2>Dart 编程语言介绍</h2>
              <p>Dart 是一个为全平台构建快速应用的客户端优化的编程语言。</p>
              <Picture
                src="/paper/dart_basic/0.png"
                metadata={{ w: 2290, h: 1204 }}
              />
            </>
          }
        >
          <h2 id="intro">
            变量与常量
            <a className="anchor" href="#intro">
              #
            </a>
          </h2>
          <h3>关键词 var</h3>
          <p>
            在dart中可以使用var来替代具体类型的声明，
            <mark>会自动推导变量的类型</mark>
            ，这是因为var并不是直接存储值，而是存储值的对象引用，所以var可以声明任何变量。
          </p>
          使用 var 需要注意的是：
          <ul>
            <li>
              在Flutter开发一般会经常使用var声明变量，以便于可以自动推导变量的类型
            </li>
            <li>
              如果var声明的变量开始不初始化，不仅值可以改变它的类型也是可以被修改的，但是一旦开始初始化赋值后，它的类型就确定了，后续不能被改变
            </li>
          </ul>
          <Code lang="dart" code={snippets.var} />
          <h3>关键词 final 和 const</h3>
          <p>在dart中声明常量可以使用const或final 两个关键字。</p>
          <p>
            注意: 这两者的区别在于如果常量是<mark>编译期</mark>
            就能初始化的就用const, 如果常量是final <mark>运行时</mark>
            初始化的就用。
          </p>
          <h2>运算符</h2>
          <h3>空安全运算符</h3>
          <h4>1. result = expr1 ?? expr2</h4>
          <p>
            如果发现expr1为<mark>null</mark>
            ，就返回expr2的值，否则就返回expr1的值。
          </p>
          <Code lang="dart" code={snippets.safeNull1} />
          <h4>
            2、expr1 ??= expr2 等价于 expr1 = expr1 ?? expr2 (转化成第一种)
          </h4>
          <Code lang="dart" code={snippets.safeNull2} />
          <h4>3、result = expr1?.value</h4>
          <p>如果expr1不为null就返回expr1.value，否则就会返回null。</p>
          <Code lang="dart" code={snippets.safeNull3} />
          <h3>级联操作符(..)</h3>
          <p>级联操作符是 .., 可以对一个对象中字段进行链式调用操作。</p>
          <Code lang="dart" code={snippets.chain} />
          <h2>函数</h2>
          <h3>函数的简化以及箭头函数</h3>
          <p>
            在dart中的如果在函数体内<mark>只有一个表达式</mark>
            ，那么就可以使用箭头函数来简化代码
          </p>
          <Code lang="dart" code={snippets.arrowFn} />
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}

const snippets = {
  var: `main() {
    var color; // 仅有声明未赋值的时候，这里的color的类型是dynamic,所以它的类型是可以变的 
    color = 'red';
    print(color is String); //true 
    color = 0xffff0000;
    print(color is int); //true 
  
    var colorValue = 0xffff0000; //声明时并赋值，这里colorValue类型已经推导出为int,并且确定了类型 
    colorValue = 'red'; //错误，这里会抛出编译异常，String类型的值不能赋值给int类型 
    print(colorValue is int); //true
  }`,
  safeNull1: `main() {
    var choice = question.choice ?? 'A';
    //等价于
    var choice2;
    if(question.choice == null) {
        choice2 = 'A';
    } else {
        choice2 = question.choice;
    }
  }`,
  safeNull2: `main() {
    var choice ??= 'A';
    //等价于
    if(choice == null) {
        choice = 'A';
    }
  }`,
  safeNull3: `var choice = question?.choice;   //等价于  
  if(question == null){
     return null;   
  } else {       
     return question.choice;   
  }
  question?.commit();   //等价于   
  if(question == null){       
     return;//不执行commit()   
  } else {       
    question.commit();//执行commit方法  
  }`,
  chain: `question
  ..id = '10001'
  ..stem = '第一题: xxxxxx'
  ..choices = <String> ['A','B','C','D']
  ..hint = '听音频做题';`,
  arrowFn: `add4(num a, num b, {num c, num d}) {
    print(a + b + c + d);
  }
  
  add5(num a, num b, {num c, num d})  =>  print(a + b + c + d);`,
};
