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

  const handleClick = (event) => {
    machine.load(value);
    machine.execute();
    updateApp();
  };

  const handleStepInto = (event) => {
    machine.load(value);
    machine.executeStepWise(() => {});
    console.log(steps);
    updateApp();
  };

  const handleNext = (event) => {
    machine.nextStep();
    updateApp();
  };

  return (
    <div className="main-container">
      <p>ASSEMBLY SIMULATOR</p>
      <div className="input-output">
        <div className="input-box">
          <Editor setValue={setValue} handleClick={handleClick} />
          <div className="button-div">
            <button onClick={handleStepInto}>Step Into</button>
            <button onClick={handleClick}>Run</button>
            <button onClick={handleNext}>Next</button>
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
