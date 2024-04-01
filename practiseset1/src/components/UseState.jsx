
import React, { useState } from "react";
function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState Hook {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
}

export default UseState;
