import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


export const  datacontext=createContext();


export const Fetch=props=> {
 

  const [info, setInfo] = useState([]);

  const fetchurl=`https://reqres.in/api/users?page=1`;
  console.log(fetchurl)

  useEffect(() => {
    axios
      .get(fetchurl)
      .then((res) => setInfo(res.data.data))
      .catch((err) => console.log(err))
      
  }, []);
  console.log(info);
  
     
  return (
  <datacontext.Provider value={info}>
     {props.children}
    
    </datacontext.Provider>
  );
}


