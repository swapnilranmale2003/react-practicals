import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
function App() {
  return (
    <div className="App">
     <h1>React tooltip project demo</h1>
     <Tippy content={"Hello"}>
     <button>Hover</button>
     </Tippy>
    </div>
  );
}

export default App;
