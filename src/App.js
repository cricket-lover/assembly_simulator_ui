import React, { useState, useEffect } from 'react';
import Machine from '@craftybones/assembly_simulator';
import logo from './logo.svg';
import './App.css';

function App() {
  const machine = new Machine();
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = function (event) {
    console.log(value);
    machine.load(value);
    machine.execute();
    setOutput(machine.getPrn().join('\n'));
  };

  return (
    <div>
      <textarea type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Run</button>
      <div>{output}</div>
    </div>
  );
}

export default App;
