import Footer from "@src/components/footer";
import Header from "@src/components/header";
import React from "react";
import style from "./page_wrapper.module.css";

export default function PageWrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className={style["pageWrapper"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
