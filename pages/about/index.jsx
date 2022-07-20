import style from "./about.module.css";
import Layout from "../../components/Layout/Layout";

const about = () => {
  return (
    <Layout>
      <div className={style.title}>
        <h1 className={style.h1}>About Me</h1>
      </div>
    </Layout>
  );
};

export default about;
