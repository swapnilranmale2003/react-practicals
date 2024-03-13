import React from "react";
function Hello() {
  let text = "Scaler";
  function myName() {
    return "Jordan";
  }
  return <div>Lorem, {text} dolor.{myName()}</div>;
}

export default Hello;
