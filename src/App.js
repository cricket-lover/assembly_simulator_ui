import React, { useState } from 'react';
import Machine from '@craftybones/assembly_simulator';
import './App.css';

function App() {
  const machine = new Machine();
  const [value, setValue] = useState('');
  const [output, setOutput] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleClick = function (event) {
    console.log(value);
    machine.load(value);
    machine.execute();
    setOutput(machine.getPrn());
    setSteps(machine.getTable());
  };

  const getSteps = (stepsArray) => {
    const formattedSteps = stepsArray.map((step, index) => {
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
    });
    return formattedSteps;
  };

  const getFormattedOutput = (outputArray) => {
    return outputArray.map((value, index) => <div key={index}>{value}</div>);
  };
  return (
    <div className="main-container">
      <div className="text-box">
        <textarea
          type="text"
          className="text-area"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Run</button>
      </div>
      <div className="output">{getFormattedOutput(output)}</div>
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
    </div>
  );
}

export default App;
