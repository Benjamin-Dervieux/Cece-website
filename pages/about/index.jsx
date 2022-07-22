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
          Après avoir fait des études de commerce et de management, et riche de
          5 ans d’expériences dans l’agroalimentaire et le sport, j’ai fait le
          choix de me réorienter dans un domaine qui fait partie de mes centres
          d’intérêts depuis longtemps: la diététique et la nutrition. J’ai donc
          décidé de me former à distance, en parallèle de mon activité
          professionnelle, avec l’objectif d’obtenir le BTS Diététique en été
          2023. Ma passion pour le sport m’a amenée à en faire mon métier et je
          me suis tout naturellement intéressée davantage à la nutrition vu la
          complémentarité de ces deux univers. Je suis convaincue que
          l’empathie, la passion et la capacité d’accompagnement sont des
          compétences fondamentales du métier de nutritionniste, compétences
          acquises au cours de mes expériences professionnelles.
        </p>
      </div>

      <div className={style.fraise}>
        <img src="/images/fraise.png" alt="strawberry" />
      </div>
    </Layout>
  );
};

export default about;
