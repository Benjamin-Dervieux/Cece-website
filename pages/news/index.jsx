import style from "./news.module.css";
import Layout from "../../components/Layout/Layout";
import { useState, useContext } from "react";
import { CardContext } from "../../context/CardContext";
import CardItem from "../../components/CardItem/CardItem";
import FormNews from "../../components/Forms/FormNews/FormNews";
import Link from "next/link";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const News = () => {
  const [searchValue, setSearchValue] = useState("");

  const { newsList } = useContext(CardContext);

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
          <Link href="#formNews">
            <BsFillArrowDownCircleFill className={style.btnScroll} />
          </Link>
        </div>
        {newsList
          .filter((news) =>
            news.title.toUpperCase().includes(searchValue.toUpperCase())
          )
          .map((news) => (
            <CardItem card={news} key={news.id} id={news.id} />
          ))}
        <FormNews />
      </div>
    </Layout>
  );
};

export default News;
