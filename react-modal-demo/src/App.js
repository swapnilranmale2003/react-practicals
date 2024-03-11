import './App.css';
import Modal from 'react-modal'
function App() {
  return (
    <div className="App">
     <Modal isOpen={true}>
      <h1>Modal Title</h1>
      <p>Modal Body</p>
     </Modal>
    </div>
  );
}

export default App;
