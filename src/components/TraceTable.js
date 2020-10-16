import React from 'react';

const getStep = (step, index) => {
  return (
    <tr key={index}>
      <td>{step.CL}</td>
      <td>{step.NL}</td>
      <td className="instruction">{step.INST}</td>
      <td>{step.A}</td>
      <td>{step.B}</td>
      <td>{step.C}</td>
      <td>{step.D}</td>
      <td>{step.EQ}</td>
      <td>{step.NE}</td>
      <td>{step.GT}</td>
      <td>{step.LT}</td>
      <td className="instruction">{step.PRN}</td>
    </tr>
  );
};

const getSteps = (stepsArray) => {
  const formattedSteps = stepsArray.map((step, index) => {
    return getStep(step, index);
  });
  return formattedSteps;
};

const TraceTable = ({ steps }) => {
  return (
    <div className="result-table">
      <table className="registerTable">
        <thead className="heading">
          <tr>
            <th>CL</th>
            <th>NL</th>
            <th>INST</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>EQ</th>
            <th>NE</th>
            <th>GT</th>
            <th>LT</th>
            <th>PRN</th>
          </tr>
        </thead>
        <tbody>{getSteps(steps)}</tbody>
      </table>
    </div>
  );
};

export default TraceTable;
