
import './App.css';
import { useState } from 'react';

//1 React form
//Controlled compo
//Uncontrolled compo


function App() {
  const [name, setName] = useState("")
  const handleChnage = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (
    <div className="App">
      <h1>Controlled and UnControlled Components</h1>
      <form>
        <label>Name</label>
        <input type="text" value={name} onChange={handleChnage} />
      </form>
    </div>
  );
}

export default App;
