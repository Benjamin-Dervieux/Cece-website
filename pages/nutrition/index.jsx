import style from "./nutrition.module.css";
import Layout from "../../components/Layout/Layout";
import { useState, useContext } from "react";
import { CardContext } from "../../context/CardContext";
import CardItem from "../../components/CardItem/CardItem";
import FormNutrition from "../../components/Forms/FormNutrition/FormNutrition";
import Link from "next/link";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Nutrition = () => {
  const [searchValue, setSearchValue] = useState("");

  const { nutritionList } = useContext(CardContext);

  return (
    <Layout>
      <div>
        <div className={style.searchContainer}>
          <input
            value={searchValue}
            type="text"
            placeholder="Find An Article"
            onChange={(event) => setSearchValue(event.target.value)}
            className={style.searchBar}
          />
          <Link href="#formNutrition">
            <BsFillArrowDownCircleFill className={style.btnScroll} />
          </Link>
        </div>
        {nutritionList
          .filter((nutrition) =>
            nutrition.title.toUpperCase().includes(searchValue.toUpperCase())
          )
          .map((nutrition) => (
            <CardItem card={nutrition} key={nutrition.id} id={nutrition.id} />
          ))}
        <FormNutrition />
      </div>
    </Layout>
  );
};

export default Nutrition;
