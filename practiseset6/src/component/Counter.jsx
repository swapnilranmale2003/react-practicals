import React, { useReducer } from "react";
import "./Counter.css";
const initialstate = 0;
const reducer = (state, action) => {
    switch(action){
        case "Increment" :
            return state + 1;
        case "Decrement" :
            return state - 1;
        default:
         return state;
    }
};
function Counter() {
 const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="counter-app">
     
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement </button>
      <h1>   {count}</h1>
    </div>
  );
}

export default Counter;
