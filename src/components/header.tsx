import LogoText from "@src/assets/images/tiny/logo-text.png";
import LogoImg from "@src/assets/images/tiny/logo.png";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style["header"]}>
      <Link href="/" passHref>
        <div className={style["logoWrapper"]}>
          <div className={style["logo"]}>
            <Image src={LogoImg} alt="" />
          </div>
          <div className={style["logoText"]}>
            <Image src={LogoText} alt="" />
          </div>
        </div>
      </Link>
      <ul className={style["menu"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a className="newsletter">Newsletter</a>
        </li>
        <li>
          <a className="hire-me" href="/contact/">
            Hire Me
          </a>
        </li>
        <li>
          <a
            className="github"
            href="https://github.com/xiamu14"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={20} />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/BenjarminX"
            title="@BenjarminX"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter size={20} />
          </a>
        </li>
      </ul>
    </header>
  );
}
