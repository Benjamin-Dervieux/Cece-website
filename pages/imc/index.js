/* eslint-disable @next/next/no-img-element */
import style from "./imc.module.css";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

const Imc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [imc, setImc] = useState("");
  const [message, setMessage] = useState("");

  let calcImc = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Merci de rentrer des données valides");
    } else {
      let imc = (weight / (height * height)) * 10000;
      setImc(imc.toFixed(1));

      if (imc < 18) {
        setMessage("Vous êtes en sous-poids");
      } else if (imc >= 18 && imc < 25) {
        setMessage("Vous avez un poids normal");
      } else {
        setMessage("Vous êtes en surpoids");
      }
    }
  };

  let imgSrc;

  if (imc < 1) {
    imgSrc = "/images/Qmark.png";
  } else {
    if (imc < 18) {
      imgSrc = "/images/underweight.png";
    } else if (imc >= 18 && imc < 25) {
      imgSrc = "/images/healthy.png";
    } else {
      imgSrc = "/images/overweight.png";
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <Layout>
      <div className={style.mainContainer}>
        <div className={style.container}>
          <h1 className={style.center}>Calculez votre IMC</h1>
          <form action="imc" onSubmit={calcImc}>
            <div>
              <label htmlFor="height">Votre taille :</label>
              <input
                className={style.input}
                type="text"
                id="height"
                placeholder="Height in cm"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="weight">Votre poid :</label>
              <input
                className={style.input}
                type="text"
                id="weight"
                placeholder="weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <button className={style.btn} type="submit">
                Calculer
              </button>
              <button
                className={style.btnOutline}
                type="submit"
                onClick={reload}
              >
                Recharger
              </button>
            </div>
          </form>

          <div className={style.center}>
            <h3>Votre IMC est de : {imc}</h3>
            <p className={style.p}>{message}</p>
          </div>

          <div className={style.imgContainer}>
            <img className={style.img} src={imgSrc} alt="personnages" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Imc;
