import React, { useState } from 'react';
import Machine from '@craftybones/assembly_simulator';
import Editor from './components/Editor';
import OutputConsole from './components/OutputConsole';
import RegisterTable from './components/RegisterTable';
import StackTable from './components/StackTable';
import './App.css';

function App() {
  const machine = new Machine();
  const [value, setValue] = useState('');
  const [output, setOutput] = useState([]);
  const [steps, setSteps] = useState([]);

  const updateApp = () => {
    setOutput(machine.getPrn());
    setSteps(machine.getTable());
  };

  const executor = (event) => {
    machine.load(value);
    machine.execute();
    updateApp();
  };

  return (
    <div className="main-container">
      <p>ASSEMBLY SIMULATOR</p>
      <div className="input-output">
        <div className="input-box">
          <Editor setValue={setValue} />
          <div className="button-div">
            <button>Step Into</button>
            <button onClick={executor}>Run</button>
            <button>Next</button>
          </div>
        </div>
        <OutputConsole output={output} />
      </div>
      <div className="input-output">
        <RegisterTable steps={steps} />
        <StackTable />
      </div>
    </div>
  );
}

export default App;
