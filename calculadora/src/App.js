import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './styles/App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default App;
