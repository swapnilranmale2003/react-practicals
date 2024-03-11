import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import React, { forwardRef } from 'react'


// component
const ColoredComponent = () => {
  return (
    <p>Colored Component</p>
  )
}
const CustomChild=forwardRef((props, ref)=>{
  return(
    <div ref={ref}>
      <div>first line</div>
      <div>second line</div>
    </div>
  )
})
function App() {
  return (
    <div className="App">
      <h1>React tooltip project demo</h1>
      <Tippy placement='right' arrow={false} delay={1000} content={"Hello"}>
        <button>Hover</button>
      </Tippy>
      <div style={{ paddingTop: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Paragraph by lorem</span>}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium!</p>
        </Tippy>
      </div>
      <div>
        <Tippy content={<p style={{ color: "red" }}>Nature Glimpsee!</p>} >
          <img src="assets/nature.jpeg" alt="" />
        </Tippy>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Tippy content={<ColoredComponent />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Tippy content={<ColoredComponent />}>
        <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
