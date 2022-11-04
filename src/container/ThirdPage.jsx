import React, { useState, useEffect } from "react";
import ThirdPage from "../component/ThirdPage";
import dataApi from "./apiData";
function ThirdPageFunc () {

const [info,setInfo] = useState([]);

const makeGetRequest3 = async()=>{
  
  let datos = await dataApi().then(response => response).catch(err => console.log(err));
  setInfo(datos);

}

useEffect(()=>{
  makeGetRequest3();

},[]);

  return (
 <ThirdPage 
 info = {info}

 />
   );
}

export default ThirdPageFunc;
