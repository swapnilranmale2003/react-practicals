import './App.css';
import ChildA from './components/ChildA';
import Man from './components/Man';
import Person from './components/Person';
// import ListPractise from './components/ListPractise';
import UseState from './components/UseState';
// import Mybutton from './components/Mybutton';

function App() {
  const name = "Jordan walke";
  // const user = {
  //   name: 'Hedy Lamarr',
  //   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //   imageSize: 90,
  // };
  return (
    <div className="App">
      {/* <h1>Welcome  <h1>{user.name}</h1></h1>
      <Mybutton /> */}
      <UseState />
      {/* <ListPractise /> */}
      {/* <Person  name= "Jordam walke"/> */}
      {/* <Man percent = "99" /> */}
      {/* <ChildA name = {name} /> */}
    </div>
  );
}

export default App;
