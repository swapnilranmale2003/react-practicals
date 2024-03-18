import { ChromePicker } from 'react-color'
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('fff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'close color Picker' : 'Pick a color'}</button>
      {
        showColorPicker && <ChromePicker color={color} onChange={(updateColor) => {
          setColor(updateColor.hex)
        }} />
      }

      <h2>you picked {color}</h2>

    </div>
  );
}

export default App;
