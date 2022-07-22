/* eslint-disable @next/next/no-img-element */
import style from "./CardItem.module.css";
import * as dayjs from "dayjs";
import { useState } from "react";

const CardItem = ({ card }) => {
  const date = card.createdAt;
  const newFormatdate = dayjs(date).format("MMMM D, YYYY h:mm A");
  const [article, setArticle] = useState();

  const deleteArticle = async (id) => {
    if (
      confirm("Voulez vous vraiment supprimer cet article définitivement ?")
    ) {
      await axios.delete(`/api/articles/${id}`);
      alert("projet bien supprimé");
      setArticle((article) => article.filter((a) => a.id !== id));
    }
  };

  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.mainContainer}>
          <div className={style.topContainerInfo}>
            <div className={style.imageContainer}>
              <img
                className={style.imageStyle}
                src={card.urlPicture}
                alt={card.title}
              />
            </div>
            <div className={style.infoStyle}>
              <h1 className={style.h1}>
                {card.title} - {card.category}
              </h1>
              <p className={style.date}>{newFormatdate}</p>
            </div>
          </div>

          <p className={style.textStyle}>{card.content}</p>
          <h4 className={style.h4}>{card.author}</h4>
          <div className={style.remove}>
            <button
              className={style.btn}
              type="button"
              onClick={() => deleteArticle(id)}
            >
              Delete article
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
