import React, { useState } from 'react';
import Editor from './Editor';
import OutputConsole from './OutputConsole';
import RegisterTable from './RegisterTable';
import StackTable from './StackTable';

const Assembly = ({ machine }) => {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState([]);
  const [steps, setSteps] = useState([]);

  const updateApp = () => {
    console.log('called updateApp');
    setOutput(machine.getPrn().slice());
    setSteps(machine.getTable().slice());
  };

  const executor = (event) => {
    machine.load(value);
    machine.execute();
    updateApp();
  };

  const handleStepInto = (event) => {
    machine.load(value);
    machine.executeStepWise(updateApp);
    console.log('Entered handleStepInto', machine.getTable());
  };

  const handleNext = () => {
    machine.nextStep();
  };

  return (
    <div className="main-container">
      <p>ASSEMBLY SIMULATOR</p>
      <div className="input-output">
        <div className="input-box">
          <Editor setValue={setValue} />
          <div className="button-div">
            <button onClick={handleStepInto}>Step Into</button>
            <button onClick={executor}>Run</button>
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
};

export default Assembly;