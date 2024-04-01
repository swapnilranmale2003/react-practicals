import React, { useState, useEffect } from "react";
function UseState() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Ram");
  useEffect(() => {
    console.log("Component mounted");
  }, [data]);
  return (
    <div>
      <h1>useState Hook {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>useState Data {data}</h1>
      <button onClick={() => setData("Seeta")}>Update Data</button>
    </div>
  );
}

export default UseState;
