import './App.css';

import UseState from './components/UseState';
// import Mybutton from './components/Mybutton';

function App() {
 
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
    </div>
  );
}

export default App;
