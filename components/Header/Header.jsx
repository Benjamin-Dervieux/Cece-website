/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./Header.module.css";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <div className={style.mainHeaderContainer}>
      <div className={style.logoContainer}>
        <Link href="/home">
          <img
            className={style.logo}
            src="/images/logo.png"
            alt="logo Célia Roettger"
          />
        </Link>
      </div>
      <div className={style.mainNavContainer}>
        <nav className={style.navContainer}>
          <ul className={style.ul}>
            <Link href="/">
              <a className={style.links}>Home</a>
            </Link>

            <Link href="/about">
              <a className={style.links}>About Me</a>
            </Link>

            <Link href="/articles">
              <a className={style.links}>Articles</a>
            </Link>

            <Link href="/contact">
              <a className={style.links}>Contact</a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
