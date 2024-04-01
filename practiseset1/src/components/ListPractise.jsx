import React from "react";

function ListPractise() {
  const array = [1, 2, 3, 4, 5];
  const arrayItems = array.map((item) => {
    return <li key={item.toString()}>{item}</li>;
  });

  return <div>{arrayItems}</div>;
}

export default ListPractise;
