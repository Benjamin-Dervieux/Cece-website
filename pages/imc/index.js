/* eslint-disable @next/next/no-img-element */
import style from "./imc.module.css";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

const Imc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
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
        setMessage("You are underweight");
      } else if (imc >= 18 && imc < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
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
          <h1 className={style.center}>BMI Calculator</h1>
          <form action="imc" onSubmit={calcImc}>
            <div>
              <label htmlFor="height">Your height :</label>
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
              <label htmlFor="weight">Your weight :</label>
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
                Submit
              </button>
              <button
                className={style.btnOutline}
                type="submit"
                onClick={reload}
              >
                Reload
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
