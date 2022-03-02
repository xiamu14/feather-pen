import articleList from "@src/article_list";
import PageCard from "@src/components/page_card";
import PageWrapper from "@src/components/page_wrapper";
import type { NextPage } from "next";
import style from "./index.module.css";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <main
        style={{
          margin: "0 auto 64px",
          minHeight: "77vh",
          paddingTop: "104px",
          width: "80%",
        }}
      >
        <div className={style["paperCardList"]}>
          {articleList.map((item, key) => {
            return <PageCard key={key} {...item} />;
          })}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Home;
