
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import UseStateWithArray from './Components/UseStateWithArray/UseStateWithArray';
// import UseStateWithObject from './Components/UseStateWithObject/UseStateWithObject';
//useState hook with object
function App() {
  return (
    <div className="App">
     {/* <UseStateWithObject /> */}
     {/* <UseStateWithArray /> */}
     <TodoList />
    </div>
  );
}

export default App;
