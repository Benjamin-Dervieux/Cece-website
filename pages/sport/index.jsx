import style from "./sport.module.css";
import Layout from "../../components/Layout/Layout";
import { useState, useContext } from "react";
import { CardContext } from "../../context/CardContext";
import CardItem from "../../components/CardItem/CardItem";
import FormSport from "../../components/Forms/FormSport/FormSport";
import Link from "next/link";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Sport = () => {
  const [searchValue, setSearchValue] = useState("");

  const { sportList } = useContext(CardContext);

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
          <Link href="#formSport">
            <BsFillArrowDownCircleFill className={style.btnScroll} />
          </Link>
        </div>
        {sportList
          .filter((news) =>
            sport.title.toUpperCase().includes(searchValue.toUpperCase())
          )
          .map((sport) => (
            <CardItem card={sport} key={sport.id} id={sport.id} />
          ))}
        <FormSport />
      </div>
    </Layout>
  );
};

export default Sport;
