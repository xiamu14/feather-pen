import PageCard from "@src/components/page_card";
import PageWrapper from "@src/components/page_wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <main
        style={{
          margin: "64px auto",
          minHeight: "72vh",
          paddingTop: "40px",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              href: "",
              title: "",
              updateAt: "",
              desc: "",
            },
            {
              href: "",
              title: "",
              updateAt: "",
              desc: "",
            },
            {
              href: "",
              title: "",
              updateAt: "",
              desc: "",
            },
          ].map((item, key) => {
            return <PageCard key={key} />;
          })}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Home;
