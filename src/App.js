import React from 'react';
import Machine from '@craftybones/assembly_simulator';
import Assembly from './components/Assembly';
import './App.css';

function App() {
  return <Assembly machine={new Machine()} />;
}

export default App;
