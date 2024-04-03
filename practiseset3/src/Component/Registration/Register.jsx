import React, { useEffect, useState } from "react";
import "./Register.css";
function Register() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("all fields are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <div>
      <pre>
        {flag ? <h2>Hello {inputData.name}You are registered</h2> : ""}{" "}
      </pre>
      <form action="" className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            id=""
            value={inputData.name}
            onChange={handleData}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id=""
            value={inputData.email}
            onChange={handleData}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleData}
            id=""
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
