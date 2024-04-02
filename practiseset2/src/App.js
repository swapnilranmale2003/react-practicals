import { createContext } from "react";
import "./App.css";
import ChildA from "./component/ChildA";
// import UseRef from "./component/UseRef";
//create,provider,consumer
const data = createContext();
function App() {

  const name = "Swapnil";
  return (
    <div className="App">
      { /* <UseRef /> */}
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
}

export default App;
export { data };