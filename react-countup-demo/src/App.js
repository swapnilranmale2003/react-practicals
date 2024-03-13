import './App.css';
import CountUp,{useCountUp} from 'react-countup'
function App() {
  const {countUp, start, pauseResume, reset, update}=useCountUp({
    duration:5,
    end:10000
  })
  return (
    <div className="App">
      <div>
        <h1>{countUp}</h1>
        
      </div>
     <div>
      <h1>React Countup demo</h1>
      <CountUp end={200} />
      <br />
      <CountUp end={200} duration={5} />
      <h1>
      <CountUp  start={500} end={2000} duration={5} />
      </h1>
      <h1>
      <CountUp   end={1000} duration={5} prefix='$' decimals={2}/>
      </h1>
      <h1>
      <CountUp   end={1000} duration={5} suffix='USD' decimals={2}/>
      </h1>
     </div>
    </div>
  );
}
export default App;
