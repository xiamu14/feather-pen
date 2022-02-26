import TestImg from "@src/assets/images/2.jpeg";
import Image from "next/image";
import Link from "next/link";
import style from "./page_card.module.css";
export default function PageCard() {
  return (
    <article className={style["postCard"]}>
      <div className={style["postLink"]}>
        <Link href="/paper/tree">tree</Link>
      </div>
      <div className={style["postImage"]}>
        <Image src={TestImg} alt="" />
      </div>
      <div className={style["postOverlay"]}></div>
    </article>
  );
}
