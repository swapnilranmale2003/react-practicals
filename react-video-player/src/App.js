import React from 'react'
import ReactPlayer from 'react-player'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* default width 640px h is 360px */}
      <h1>React video player</h1>
      <ReactPlayer
        width={'480px'}
        height={'240px'}
        controls
        url={"https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"}
        onReady={() => console.log("onReady")}
        onStart={() => console.log("onStart")}
        onPause={() => console.log("onPause")}
        onEnded={() => console.log("onEnded")}
        onError={() => console.log("onError")}
      />
    </div>
  );
}

export default App;
