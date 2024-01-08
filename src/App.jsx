import React, { Component } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterClass />
        <CounterHooks />
      </div>
    );
  }
}

export default App;
