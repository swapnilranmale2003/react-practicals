import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder={"Enter your name"} value={name} /> <br /> <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder={"Enter your Email"} value={email} /> <br /> <br />
        <button>Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
