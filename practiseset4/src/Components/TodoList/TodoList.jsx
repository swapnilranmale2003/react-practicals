import React, { useState } from "react";
import "./TodoList.css";
function TodoList() {
  const [activity, setActivity] = useState("");
  const [addList, setAddList] = useState([]);
  const handleList = (e) => {
    setActivity(e.target.value);
  };
  const update = () => {
    {
      // setAddList([...addList, activity])
      // console.log(addList)
      setAddList((addList) => {
        const updateList = [...addList, activity];
        console.log(updateList);
        setActivity("");
        return updateList;
      });
    }
  };
  const removeList = (indexToRemove) => {
    const updatedList = addList.filter((_, index) => index !== indexToRemove);
    setAddList(updatedList);
  };
  const removeAll = () => {
    setAddList([]);
  };
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add activity"
          value={activity}
          onChange={handleList}
        />
        <button onClick={update}>Add List</button>
        <p className="listheading">Here is your list</p>
        {addList.map((list, index) => {
          return (
            <>
              <li key={index}>{list}</li>
              <button onClick={() => removeList(index)}>Remove</button>
            </>
          );
        })}
        <div>
          {addList.length > 1 && (
            <button onClick={removeAll}>Remove All</button>
          )}
        </div>
      </div>
    </>
  );
}

export default TodoList;
