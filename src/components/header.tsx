import LogoText from "@src/assets/images/logo-text.png";
import LogoImg from "@src/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
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
            className="linkedin"
            href="https://www.linkedin.com/in/areknawo/"
            title="linkedin"
          >
            <i className="icons icons-linkedin"></i>
          </a>
          <a
            className="github"
            href="https://github.com/areknawo"
            title="github"
          >
            <i className="icons icons-github"></i>
          </a>
          <a
            className="facebook"
            href="https://www.facebook.com/areknawoblog"
            title="areknawoblog"
          >
            <i className="icons icons-facebook"></i>
          </a>
          <a
            className="twitter"
            href="https://twitter.com/areknawo"
            title="@areknawo"
          >
            <i className="icons icons-twitter"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}
