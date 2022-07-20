import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [articleList, setArticleList] = useState([]);

  // ===================NEWS====================== //

  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => response.data)
      .then((data) => {
        setArticleList(data);
      });
  }, []);

  return (
    <CardContext.Provider
      value={{
        articleList,
        setArticleList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
