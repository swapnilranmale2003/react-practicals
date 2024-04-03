import React, { useCallback, useState } from 'react'
import UseCallChildA from './UseCallChildA';

function UseCallBack() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(100);
  const Learning=useCallback(()=>{
    //some
  },[count])
  return (
    <div>
      <h1>learn usecallback</h1>
      <UseCallChildA Learning={Learning} count={count} />
      <span>{data}</span> <br />
      <button onClick={()=>setData(data+1)}>Update</button> <br />
      <span>{count}</span> <br />
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default UseCallBack
