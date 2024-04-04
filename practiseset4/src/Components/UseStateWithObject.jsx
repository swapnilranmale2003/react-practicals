import React, { useState } from 'react'
import './UseStateWithObject.css'
function UseStateWithObject() {

    const[allValues, setAllValues] = useState({firstName:"Sunny", lastName:"Ranmale"});
    const update = ()=>{
        setAllValues({ ...allValues,firstName:"XYZ"})
    }
  return (
    <div>
      <h1>My firstName is {allValues.firstName} and lastName is {allValues.lastName} </h1>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default UseStateWithObject
