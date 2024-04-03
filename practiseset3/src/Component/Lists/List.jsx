import React from "react";

function List() {
  const numbers = ["MI", "CSK", "RCB"];
  const doubled = numbers.map((number) => number);
  console.log(doubled);
  return (
    <div>
      <h2>{doubled}</h2>
    </div>
  );
}

export default List;
