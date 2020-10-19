import React, { useState } from 'react';
import InputPanel from './InputPanel';
import OutputConsole from './OutputConsole';
import RegisterTable from './RegisterTable';
import StackTable from './StackTable';

const Assembly = ({ machine }) => {
  const [output, setOutput] = useState([]);
  const [steps, setSteps] = useState([]);
  const [stack, setStack] = useState([]);

  const updateApp = () => {
    setStack(machine.getStack());
    setOutput(machine.getPrn());
    setSteps(machine.getTable());
  };

  const executor = (value) => {
    machine.load(value);
    machine.execute();
    updateApp();
  };

  const handleStepInto = (value) => {
    machine.load(value);
    machine.executeStepWise(updateApp);
  };

  const handleNext = () => {
    machine.nextStep();
  };

  return (
    <div className="main-container">
      <p>ASSEMBLY SIMULATOR</p>
      <div className="input-output">
        <InputPanel
          executor={executor}
          handleStepInto={handleStepInto}
          handleNext={handleNext}
        />
        <OutputConsole output={output} />
      </div>
      <div className="input-output">
        <RegisterTable steps={steps} />
        <StackTable stack={stack} />
      </div>
    </div>
  );
};

export default Assembly;
