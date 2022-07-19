import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [nutritionList, setNutritionList] = useState([]);
  const [sportList, setSportList] = useState([]);

  // ===================NEWS====================== //

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => response.data)
      .then((data) => {
        setNewsList(data);
      });
  }, []);

  // ==================NUTRITION=================== //

  useEffect(() => {
    axios
      .get("/api/nutrition")
      .then((response) => response.data)
      .then((data) => {
        setNutritionList(data);
      });
  }, []);

  // ===================SPORT====================== //

  useEffect(() => {
    axios
      .get("/api/sport")
      .then((response) => response.data)
      .then((data) => {
        setSportList(data);
      });
  }, []);

  return (
    <CardContext.Provider
      value={{
        newsList,
        setNewsList,
        nutritionList,
        setNutritionList,
        sportList,
        setSportList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
