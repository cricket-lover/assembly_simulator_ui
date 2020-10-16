import React, { useState } from 'react';
import Machine from '@craftybones/assembly_simulator';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import TraceTable from './components/TraceTable';
import './App.css';

function App() {
  const machine = new Machine();
  const [value, setValue] = useState('');
  const [output, setOutput] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleClick = (event) => {
    machine.load(value);
    machine.execute();
    setOutput(machine.getPrn());
    setSteps(machine.getTable());
  };

  return (
    <div className="main-container">
      <p>ASSEMBLY SIMULATOR</p>
      <div className="input-output">
        <div className="input-box">
          <InputBox setValue={setValue} handleClick={handleClick} />
          <div className="button-div">
            <button>Step Into</button>
            <button onClick={handleClick}>Run</button>
            <button>Next</button>
          </div>
        </div>
        <OutputBox output={output} />
      </div>
      <TraceTable steps={steps} />
    </div>
  );
}

export default App;
