import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <InfoDisplay/>
      <InfoDisplay/>
      <InfoDisplay>
        <MonthDisplay/>
      </InfoDisplay>
    </div>
  );
}

export default App;
