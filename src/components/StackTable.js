import React from 'react';
import styled from 'styled-components';

const StyledStack = styled.div`
  border: 1px solid grey;
  margin: 2px;
`;

const StyledRegisterTable = styled.table`
  text-align: center;
`;

const getStack = (stackArray) => {
  return stackArray.map((value, index) => {
    return (
      <tr key={index}>
        <th>{value}</th>
      </tr>
    );
  });
};

const StackTable = ({ stack }) => {
  return (
    <StyledStack>
      <StyledRegisterTable>
        <thead>
          <tr>
            <th>STACK</th>
          </tr>
        </thead>
        <tbody>{stack && getStack(stack)}</tbody>
      </StyledRegisterTable>
    </StyledStack>
  );
};

export default StackTable;
