import React from 'react';

const getFormattedOutput = (outputArray) => {
  return outputArray.map((value, index) => <div key={index}>{value}</div>);
};

const OutputBox = ({ output }) => {
  return <div className="output">{getFormattedOutput(output)}</div>;
};

export default OutputBox;
