/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./Header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className={style.mainHeaderContainer}>
      <div className={style.logoContainer}>
        <Link href="/home">
          <img
            className={style.logo}
            src="/images/ceceLogo.png"
            alt="logo Célia Roettger"
          />
        </Link>
      </div>
      <div className={style.mainNavContainer}>
        <nav className={style.navContainer}>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link href="/">
                <a className={style.links}>Home</a>
              </Link>
            </li>

            <li className={style.li}>
              <Link href="/about">
                <a className={style.links}>About</a>
              </Link>
            </li>

            <li className={style.subMenu}>
              <Link href="/articles">
                <a className={style.links}>Articles</a>
              </Link>

              <button className={style.subMenuBtn}>
                <IoMdArrowDropdown />
              </button>
              <div className={style.subMenuList}>
                <ul>
                  <li className={style.li}>
                    <Link href="/articles/news">
                      <a className={style.links}>News</a>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link href="/articles/nutrition">
                      <a className={style.links}>Nutrition</a>
                    </Link>
                  </li>
                  <li className={style.li}>
                    <Link href="/articles/sport">
                      <a className={style.links}>Sport</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={style.li}>
              <Link href="/contact">
                <a className={style.links}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
