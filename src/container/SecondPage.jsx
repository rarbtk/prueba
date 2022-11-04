import React, { useState, useEffect } from "react";
import SecondPage from "../component/SecondPage";
import dataApi from "./apiData";
function SecondPageFunc () {

const [info,setInfo] = useState([]);

const makeGetRequest2 = async()=>{
  
  let datos = await dataApi().then(response => response).catch(err => console.log(err));
  setInfo(datos);

}

useEffect(()=>{
  makeGetRequest2();

},[]);

  return (
 <SecondPage
 info = {info}
 />
   );
}

export default SecondPageFunc;
