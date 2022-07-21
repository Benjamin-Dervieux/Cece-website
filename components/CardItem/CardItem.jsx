/* eslint-disable @next/next/no-img-element */
import style from "./CardItem.module.css";
import * as dayjs from "dayjs";

const CardItem = ({ card }) => {
  const date = card.createdAt;
  const newFormatdate = dayjs(date).format("MMMM D, YYYY h:mm A");
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
        </div>
      </div>
    </>
  );
};

export default CardItem;
