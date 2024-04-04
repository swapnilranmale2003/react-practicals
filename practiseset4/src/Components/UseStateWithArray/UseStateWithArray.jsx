import React, { useState } from 'react';
import './UseStateWithArray.css'
function UseStateWithArray() {
    const [items, setItems] = useState([]);

    const update = () => {
        setItems([...items, {
            id: items.length,
            value: Math.random()
        }]);
        console.log("Clicked");
    }

    return (
        <div>
            <ol>
                {
                    items.map(item => (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    ))
                }
            </ol>
            <button onClick={update}>Add item</button>
        </div>
    );
}

export default UseStateWithArray;
