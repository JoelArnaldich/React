import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick }) {
  const buttons = [
    'C', '/', '*', '-', 
    '7', '8', '9', '+', 
    '4', '5', '6', '=', 
    '1', '2', '3', '.', 
    '0'
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button key={index} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
