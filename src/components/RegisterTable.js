import React from 'react';
import styled from 'styled-components';

const StyledInstruction = styled.td`
  text-align: start;
`;

const StyledRegisterTable = styled.table`
  text-align: center;
`;

const getStep = (step, index) => {
  return (
    <tr key={index}>
      <td>{step.CL}</td>
      <td>{step.NL}</td>
      <StyledInstruction>{step.INST}</StyledInstruction>
      <td>{step.A}</td>
      <td>{step.B}</td>
      <td>{step.C}</td>
      <td>{step.D}</td>
      <td>{step.EQ}</td>
      <td>{step.NE}</td>
      <td>{step.GT}</td>
      <td>{step.LT}</td>
      <StyledInstruction>{step.PRN}</StyledInstruction>
    </tr>
  );
};

const getSteps = (stepsArray) => {
  const formattedSteps = stepsArray.map((step, index) => {
    return getStep(step, index);
  });
  return formattedSteps;
};

const RegisterTable = ({ steps }) => {
  return (
    <div className="result-table">
      <StyledRegisterTable>
        <thead>
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
      </StyledRegisterTable>
    </div>
  );
};

export default RegisterTable;
