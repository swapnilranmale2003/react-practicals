
import './App.css';
import { useState } from 'react';

//1 React form
//Controlled compo
//Uncontrolled compo


function App() {
  const [name, setName] = useState("")
  const [pswd, setPswd] = useState("");
  // const handleChnage = (e) => {
  //   console.log(e.target.value)
  //   const capsName= (e.target.value).toUpperCase()
  //   setName(capsName)
  // }
  const handleChnage = (e) => {
    if (e.target.name == "firstName") {
      const capsName = (e.target.value).toUpperCase()
      setName(capsName);
    }
    else{
      setPswd(e.target.value);
    }
  }

  return (
    <div className="App">
      <h1>Controlled and UnControlled Components</h1>
      <form>
        <label>Name</label>
        <input type="text" name='firstName' value={name} onChange={handleChnage} />
        <label>Password</label>
        {/* <input type="text" value={pswd} onChange={handlePswd} /> */}
        <input type="text" name='password' value={pswd} onChange={handleChnage} />

      </form>
    </div>
  );
}

export default App;
