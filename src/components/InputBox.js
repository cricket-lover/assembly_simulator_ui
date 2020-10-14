import React from 'react';

const InputBox = ({ setValue, handleClick }) => {
  return (
    <div className="text-box">
      <textarea
        type="text"
        className="text-area"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Run</button>
    </div>
  );
};

export default InputBox;
