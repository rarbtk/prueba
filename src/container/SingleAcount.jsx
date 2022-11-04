import React, { useState, useEffect } from "react";
import SingleAcount from "../component/SingleAcount";
import dataApi from "./apiData";
import { Routes, Route, useParams } from 'react-router-dom';

function SingleAcountFunc () {

const [info,setInfo] = useState([]);


let coin = useParams();

const makeGetRequest = async()=>{
  
  let datos = await dataApi().then(response => response).catch(err => console.log(err));
  setInfo(datos);

}
useEffect(()=>{
  makeGetRequest();
 
},[]);

  return (
 <SingleAcount
 info = {info}
 coin ={coin}
 />
   );
}

export default SingleAcountFunc;
