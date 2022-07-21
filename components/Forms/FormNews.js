/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import style from "./FormNews.module.css";

const FormNews = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const [userTitle, setUserTitle] = useState("");
  const [userAuthor, setUserAuthor] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userContent, setUserContent] = useState("");
  const [userCategory, setUserCategory] = useState("");

  const HandleSubmitActuality = (e) => {
    e.preventDefault();
    setTitle(!title);
    setAuthor(!author);
    setPhoto(!photo);
    setContent(!content);
    setCategory(!category);

    axios
      .post("/api/articles", {
        title: userTitle,
        author: userAuthor,
        content: userContent,
        urlPicture: userPhoto,
        category: userCategory,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        setUserTitle("");
        setUserAuthor("");
        setUserContent("");
        setUserPhoto("");
        setUserCategory("");
      });
  };

  return (
    <section id="formNews">
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.right}>
            <h2 className={style.title}>Share New Post</h2>
            <input
              type="text"
              className={style.field}
              placeholder="Title"
              value={userTitle}
              onChange={(e) => setUserTitle(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Author"
              value={userAuthor}
              onChange={(e) => setUserAuthor(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Photo URL"
              value={userPhoto}
              onChange={(e) => setUserPhoto(e.target.value)}
            />
            <input
              type="text"
              className={style.field}
              placeholder="Category"
              value={userCategory}
              onChange={(e) => setUserCategory(e.target.value)}
            />
            <textarea
              id={style.textarea}
              placeholder="Content"
              className={style.field}
              value={userContent}
              onChange={(e) => setUserContent(e.target.value)}
            ></textarea>
            <button className={style.btn} onClick={HandleSubmitActuality}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormNews;
