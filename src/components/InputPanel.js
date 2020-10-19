import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.div`
  display: flex;
  margin-left: 2px;
`;

const InputPanel = (props) => {
  const [value, setValue] = useState('');
  const [stepIntoDisable, setStepIntoDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);

  return (
    <StyledInputBox>
      <Editor setValue={setValue} />
      <StyledButton>
        <button
          className={stepIntoDisable ? 'disable' : 'enable'}
          disabled={stepIntoDisable}
          onClick={() => {
            setStepIntoDisable(true);
            setNextDisable(false);
            props.handleStepInto(value);
          }}
        >
          Step Into
        </button>
        <button
          className="enable"
          onClick={() => {
            setStepIntoDisable(false);
            setNextDisable(true);
            props.executor(value);
          }}
        >
          Run
        </button>
        <button
          className={nextDisable ? 'disable' : 'enable'}
          disabled={nextDisable}
          onClick={() => props.handleNext(value)}
        >
          Next
        </button>
      </StyledButton>
    </StyledInputBox>
  );
};

export default InputPanel;
