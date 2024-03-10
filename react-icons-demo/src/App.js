import './App.css';
import { IconContext } from 'react-icons';
import { FaReact } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";

function App() {
  return (
    <IconContext.Provider value={{color:'blue', size:'10rem'}} >
    <div className="App">
     <FaReact/> {/* 10rem = 160px */}
     <MdAccessAlarm/>
    </div>
    </IconContext.Provider>
  );
}

export default App;
