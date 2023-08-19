import React, { useEffect, useState, createContext, useContext } from "react";
const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const GlobalContext = createContext();

export const useAppContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [data, setData] = useState({
    tickets: [],
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setData(users);
        // console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
