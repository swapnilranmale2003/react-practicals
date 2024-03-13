import React from "react";
function Hello() {
  let text = "Scaler";
  function myName() {
    return "Jordan";
  }
  function add (){
    return 1+3;
  }
  return <div>{add()}, {text} dolor.{myName()}</div>;
}

export default Hello;
