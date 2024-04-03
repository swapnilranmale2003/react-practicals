import React, { useRef } from "react";

function UnControlled() {
    function handleSubmit(e){
        e.preventDefault();
        console.log(refObject.current.value)
    }
    const refObject = useRef();
    console.log(refObject)
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" ref={refObject}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlled;
