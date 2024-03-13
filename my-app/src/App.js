import './App.css';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Adam" mobile='1234567890' />
      <Hello name="Martin" />
      <Hello name="Apple" />
      <Hello name="Mango" />
    </div>
  );
}

export default App;
