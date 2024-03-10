import './App.css';
import { IconContext } from 'react-icons';
import { FaReact } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { MdAdb } from "react-icons/md";
function App() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '10rem' }} >
      {/* if you want to maintain same color and size to react icons then use inside IconContext Provider */}
      <div className="App">
        <FaReact /> {/* 10rem = 160px */}
        <MdAccessAlarm />
        <MdAdb color='purple' size={'20rem'} />

      </div>
    </IconContext.Provider>
  );
}

export default App;
