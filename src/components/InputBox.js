import React from 'react';

const InputBox = ({ setValue }) => {
  return (
    <div>
      <textarea
        type="text"
        className="text-area"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
