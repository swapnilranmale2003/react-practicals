import { createContext } from "react";
import "./App.css";
import ChildA from "./component/ChildA";
// import UseRef from "./component/UseRef";
//create,provider,consumer
//is context api also problamatic

const data = createContext();
const data1 = createContext();
function App() {

  const name = "Swapnil";
  const gender = "Male"
  return (
    <div className="App">
      { /* <UseRef /> */}
      <data.Provider value={name}>
        <data1.Provider value={gender} >
        <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1 };