import Cards from 'react-credit-cards';
import React, { useState } from 'react'

import './App.css';
import 'react-credit-cards/es/styles-compiled.css';

function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  return (
    <div className="App">
      <Cards number={number} 
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focus}
      />
      <form action="">
        <input type="tel" name="number" value={number}
          placeholder='Card Number'
          onChange={(e) => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)} />

        <input type="text" name="name" value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)} />

        <input type="text" name="expiry" value={expiry}
          placeholder='MM/YY Expiry'
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)} />

        <input type="tel" name="cvc" value={cvc}
          placeholder='CVC'
          onChange={(e) => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)} />
      </form>
    </div>
  );
}

export default App;
