import PageCard from "@src/components/page_card";
import PageWrapper from "@src/components/page_wrapper";
import type { NextPage } from "next";
import style from "./index.module.css";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <main
        style={{
          margin: "64px auto",
          minHeight: "77vh",
          paddingTop: "40px",
          width: "80%",
        }}
      >
        <div className={style["paperCardList"]}>
          {[
            {
              href: "/tree",
              title: "数据结构-N 叉树",
              updatedAt: "2022年2月28日",
              excerpt:
                "在计算机科学中，树是一种十分重要的数据结构。树被描述为一种分层数据抽象模型，常用来描述数据间的层级关系和组织结构。树也是一种非顺序的数据结构",
            },
          ].map((item, key) => {
            return <PageCard key={key} {...item} />;
          })}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Home;
