import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import './Hello.css'
function Hello() {
  const[showPass, setShowPass]=useState("false");
  const toggle = ()=>{
    setShowPass(!showPass)
  }
  return (
    <div className="password">
      <div>
        {" "}
        <input type={showPass?"text":"password"}  placeholder="Enter password" />
      </div>
      <div  onClick={toggle} >
        {" "}
        <FaEye size={"2rem"} color="#fff" />
      </div>
    </div>
  );
}

export default Hello;
