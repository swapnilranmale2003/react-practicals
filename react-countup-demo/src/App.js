import './App.css';
import CountUp from 'react-countup'
function App() {
  return (
    <div className="App">
     <div>
      <h1>React Countup demo</h1>
      <CountUp end={200} />
      <CountUp end={200} duration={5} />
     </div>
    </div>
  );
}

export default App;
