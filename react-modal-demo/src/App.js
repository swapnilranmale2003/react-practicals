import './App.css';
import Modal from 'react-modal'
import React, { useState } from 'react'
Modal.setAppElement('#root')
function App() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={ModalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}
      style={
        {
          overlay:{
            backgroundColor:"gray"
          },
          content:{
            color:"orange"
          }
        }
        
      }
      >
        <h1>Modal Title</h1>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
