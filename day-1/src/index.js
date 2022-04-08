import react from "react";
import { sum, mult } from "./calc";
import "./index.css"; 

import React from "react" ;
import ReactDOM from "react-dom" ; 

console.log(sum(1, 4));

console.log(mult(2, 5));

const h2 = React.createElement(
  "h2",
  { className: "redtext" },
  "Welcome To My WEB"
);
const img = React.createElement("img", {
  src: "https://www.seekpng.com/png/detail/215-2151943_-img-anime-character-peeking.png",
});

const p = React.createElement("p", { className: "flex" }, h2, img);
const div = React.createElement("div",{className:"on"},h2,img) ; 


ReactDOM.render( div , document.getElementById("root"));
