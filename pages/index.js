/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <div className={style.title}>
            <h1 className={style.h1}>Célia Roettger - Nutritioniste</h1>
          </div>
          <div className={style.content}>
            <div>
              <p className={style.presentation}>
                Blog nutrition : la diététique à portée de clic. Ce blog de
                nutrition à pour but de vous apporter des informations utiles
                sur la diététique. En tant que diététicienne nutritionniste, je
                partage tout ce que je sais aux travers d’articles serieux ou
                rigolos. Bonne lecture. La nutrition est une science. Une
                science magnifique car elle permet de soulager, soigner ou
                prévenir certaines problématiques de santé. Dans les articles de
                ce blog, vous trouverez pleins d’infos utiles. Je suis à votre
                disposition pour répondre à vos commentaires, alors laissez moi
                des petits messages! Qui est l’auteur de ces articles ? C’est
                moi ! Je m’appelle Célia et je suis nutritionniste. je consulte
                en ligne et j’adore mon métier, j’epère que vous le ressentirez
                à travers mes différents billets.
              </p>
            </div>
          </div>
        </div>

        <div className={style.fraise1}>
          <img src="/images/fraise.png" alt="strawberry" />
        </div>
      </div>
    </Layout>
  );
}
