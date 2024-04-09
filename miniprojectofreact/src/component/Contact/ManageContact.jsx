import React, { useState } from "react";

function ManageContact({ addContact }) {
  const [inputData, setInputData] = useState({ name: "", email: "" });

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (inputData.name === "" || inputData.email === "") {
      alert("Please enter all fields");
    } else {
      // Call the addContact function passed as prop with the inputData
      addContact(inputData);
      // Clear input fields after adding contact
      setInputData({ name: "", email: "" });
    }
  };

  return (
    <>
      <div className="contact-form">
        <div>Add Contact</div>
        <form action="">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={inputData.name}
            onChange={handleInput}
          />{" "}
          <br />
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={inputData.email}
            onChange={handleInput}
          />{" "}
          <br />
        </form>
        <button onClick={handleSubmit}>Add Contact</button>
      </div>
    </>
  );
}

export default ManageContact;
