import TestImg from "@src/assets/images/2.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import style from "./page_card.module.css";
interface Props {
  title: string;
  excerpt: string;
  updateAt: number;
  href: string;
}
export default function PageCard() {
  return (
    <div className={style["postCard"]}>
      <article className="heti heti--classic">
        <div className={style["postLink"]}>
          <Link href="/paper/tree">tree</Link>
        </div>
        <div className={style["postImage"]}>
          <Image src={TestImg} alt="" />
        </div>
        <div className={style["postOverlay"]}></div>
        <span className="postMeta">
          <span className={style["postDate"]}>2022年2月27日</span>
        </span>
        <h2 className={style["postTitle"]}>编程逻辑-关于 N 叉树数据结构</h2>
        <p className="postExcerpt">
          在层叠组件例如菜单组中使用 N 叉树数据结构优化编程逻辑的思考…
        </p>
        <span className={style["postMore"]}>
          全文...
          <FiChevronRight color="white" font-size={18} />
        </span>
      </article>
    </div>
  );
}
