import './App.css';
import Modal from 'react-modal'
import React, { useState } from 'react'

function App() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
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
