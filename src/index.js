import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PrincipalPage from './container/PrincipalPage';
import SecondPage from './container/SecondPage';
import ThirdPage from './container/ThirdPage';
import SingleAcount from './container/SingleAcount';


const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
return (
  <Router>
    <div>
  <Routes>

      <Route path="/" element={<PrincipalPage/>}>
      </Route>
      <Route path="/second" element={<SecondPage/>}>         
         </Route>
         <Route path="/third" element={<ThirdPage/>}>         
         </Route>
         <Route path="/:id/:coin" element={<SingleAcount/>}>         
         </Route>
      
  </Routes>
  </div>
  </Router>
)
}



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
