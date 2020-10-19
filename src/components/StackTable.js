import React from 'react';

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
    <div className="stack-table">
      <table className="registerTable">
        <thead className="heading">
          <tr>
            <th>STACK</th>
          </tr>
        </thead>
        <tbody>{stack && getStack(stack)}</tbody>
      </table>
    </div>
  );
};

export default StackTable;
