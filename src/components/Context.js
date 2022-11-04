import React from "react";
import { useEffect, useState, createContext } from "react";

export const DataContext = createContext();
const url = "https://api.github.com/users/peculiarrichard/repos";

export const DataProvider = (props) =>{
      const [data, setData] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    getRepos();
  }, []);
  const value ={
    repo: [data, setData]
  };

  return (
    <DataContext.Provider value ={value}>{props.children}</DataContext.Provider>
  )
}