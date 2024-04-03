import { createContext } from "react";
import "./App.css";
import ChildA from "./component/ChildA";
import UseMemo from "./component/UseMemo";
import UseCallBack from "./component/UseCallBack";
// import UseRef from "./component/UseRef";
//create,provider,consumer
//is context api also problamatic

//useContext hooks
//create, provider, useContext

const data = createContext();
const data1 = createContext();
function App() {

  const name = "Swapnil";
  const gender = "Male"
  return (
    <div className="App">
      { /* <UseRef /> */}

      {/* contextAPI
      <data.Provider value={name}>
        <data1.Provider value={gender} >
        <ChildA />
        </data1.Provider>
      </data.Provider> */}

      {/* useContext hooks */}
      {/* <data.Provider value={name}>
        <data1.Provider value={gender}>
        <ChildA />
        </data1.Provider>
      </data.Provider>
       */}
      
      {/* <UseMemo /> */}
      <UseCallBack />
    </div>
  );
}

export default App;
export { data, data1 };