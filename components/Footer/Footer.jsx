import style from "./Footer.module.css";
import { GiStrawberry } from "react-icons/gi";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        Made by BD <GiStrawberry />
      </div>
    </div>
  );
};

export default Footer;
