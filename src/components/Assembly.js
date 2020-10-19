import React, { useState } from 'react';
import styled from 'styled-components';
import InputPanel from './InputPanel';
import OutputConsole from './OutputConsole';
import RegisterTable from './RegisterTable';
import StackTable from './StackTable';

const StyledPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
    <div>
      <p>ASSEMBLY SIMULATOR</p>
      <StyledPanel>
        <InputPanel
          executor={executor}
          handleStepInto={handleStepInto}
          handleNext={handleNext}
        />
        <OutputConsole output={output} />
      </StyledPanel>
      <StyledPanel>
        <RegisterTable steps={steps} />
        <StackTable stack={stack} />
      </StyledPanel>
    </div>
  );
};

export default Assembly;
