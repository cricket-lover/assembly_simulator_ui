import React, { useState } from 'react';
import Editor from './Editor';

const InputPanel = (props) => {
  const [value, setValue] = useState('');
  const [stepIntoDisable, setStepIntoDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);

  return (
    <div className="input-box">
      <Editor setValue={setValue} />
      <div className="button-div">
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
            props.handleNext(value);
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
      </div>
    </div>
  );
};

export default InputPanel;
