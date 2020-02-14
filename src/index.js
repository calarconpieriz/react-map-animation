import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// Components
import GSAMap from './gsa-map';

function App() {
  return (
    <div>
      <GSAMap />
    </div>
  );
}

render(<App />, document.getElementById('root'));
