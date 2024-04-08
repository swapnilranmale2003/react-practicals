import './App.css';
import Name from './Name';

function App() {
  const array = [1, 2, 3, 4, 5];
  const [one,two,,four,,] = array; //destructuring of array

  // console.log(one, "One");
  // console.log(two, "Two");

  return (
    <div className="App">
      <Name fname="Sunny" lname="xyz" />
     </div>
  );
}

export default App;
