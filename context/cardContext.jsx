import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
};
