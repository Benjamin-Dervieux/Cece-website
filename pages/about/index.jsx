/* eslint-disable @next/next/no-img-element */
import style from "./about.module.css";
import Layout from "../../components/Layout/Layout";

const about = () => {
  return (
    <Layout>
      <div className={style.titleAndPhoto}>
        <img className={style.cece} src="/images/cece.jpg" alt="strawberry" />
        <h1 className={style.h1}>About Me</h1>
      </div>

      <div className={style.content}>
        <p className={style.about}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis
          aspernatur ipsam distinctio sequi quia dolorum id, culpa laudantium
          cupiditate cumque, beatae pariatur soluta. Temporibus mollitia impedit
          odio vitae assumenda necessitatibus vel nesciunt in harum ipsum. Earum
          reiciendis, quia dolorum nostrum nemo fuga labore ea cupiditate magni
          dolorem maiores, eligendi accusantium ratione. Expedita, rem! Autem,
          impedit! Quae ducimus deleniti, doloribus perspiciatis vel minima odio
          obcaecati nesciunt magnam hic error voluptas veniam amet sed
          temporibus ut ea dolorum pariatur fugit! Recusandae, pariatur fuga.
          Beatae, unde hic quos laboriosam minima consequatur? Temporibus, totam
          sapiente! Officiis temporibus maxime iusto explicabo et. Earum, quis!
        </p>
      </div>

      <div className={style.fraise}>
        <img src="/images/fraise.png" alt="strawberry" />
      </div>
    </Layout>
  );
};

export default about;
