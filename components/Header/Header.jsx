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
            src="/images/ceceLogo.png"
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
              <a className={style.links}>About</a>
            </Link>

            <div className={style.dropdown}>
              <button className={style.dropdownBtn}>Articles</button>
              <MdArrowDropDown className={style.arrowDropdown} />
              <div className={style.dropdownContent}>
                <Link href="/news">
                  <a className={style.links}>News</a>
                </Link>

                <Link href="/nutrition">
                  <a className={style.links}>Nutrition</a>
                </Link>

                <Link href="/sport">
                  <a className={style.links}>Sport</a>
                </Link>
              </div>
            </div>

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
