import React, { useState, useEffect } from "react";
import PrincipalPage from "../component/PrincipalPage";
import dataApi from "./apiData";
function PrincipalPageFunc () {

const [info,setInfo] = useState([]);

const makeGetRequest = async()=>{
  
  let datos = await dataApi().then(response => response).catch(err => console.log(err));
  setInfo(datos);

}

useEffect(()=>{
  makeGetRequest();

},[]);

  return (
 <PrincipalPage 
 info = {info}

 />
   );
}

export default PrincipalPageFunc;
