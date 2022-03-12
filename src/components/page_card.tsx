import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FiChevronRight } from "react-icons/fi";
import style from "./page_card.module.css";
interface Props {
  title: string;
  excerpt: string;
  updatedAt: string;
  href: string;
}
export default function PageCard({ href, updatedAt, title, excerpt }: Props) {
  const cardImage = useMemo(() => {
    const radomNum = Math.ceil(Math.random() * 9);
    return `/card_images/${radomNum}.avif`;
  }, []);

  return (
    <div className={style["postCard"]}>
      <article className="heti heti--classic">
        <div className={style["postLink"]}>
          <Link href={`/paper${href}`}>link</Link>
        </div>
        <div className={style["postImage"]}>
          <Image alt="" src={cardImage} layout="fill" objectFit="cover" />
        </div>
        <div className={style["postOverlay"]}></div>
        <span className="postMeta">
          <span className={style["postDate"]}>{updatedAt}</span>
        </span>
        <h2 className={style["postTitle"]}>{title}</h2>
        <p className="postExcerpt">{excerpt.slice(0, 34)}...</p>
        <span className={style["postMore"]}>
          全文...
          <FiChevronRight color="white" size={18} />
        </span>
      </article>
    </div>
  );
}
