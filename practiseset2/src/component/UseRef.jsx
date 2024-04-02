import React,{useRef, useState} from 'react'

function UseRef() {
    const refElement = useRef();
    const[name,setName]=useState("Swapnil");
    console.log(refElement)
    const handleResetClick = ()=>{
        setName("")
        refElement.current.focus();

    }
    const handleInput = ()=>{
        refElement.current.style.color="blue"
        refElement.current.value="ram"
    }
    return (
    <div>
        <h1>useRef learning</h1>
        <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
        <button onClick={handleResetClick}>Reset</button><br />
        <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default UseRef
