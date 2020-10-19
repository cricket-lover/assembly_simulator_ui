import React from 'react';
import styled from 'styled-components';

const StyledOutput = styled.div`
  width: 44.5rem;
  height: 22rem;
  margin: 2px;
  border: 1px solid grey;
  padding: 2px;
`;

const getFormattedOutput = (outputArray) => {
  return outputArray.map((value, index) => <div key={index}>{value}</div>);
};

const OutputConsole = ({ output }) => {
  return <StyledOutput>{getFormattedOutput(output)}</StyledOutput>;
};

export default OutputConsole;
