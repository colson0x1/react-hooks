import React, { Component } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import FormClass from './FormClass';
import FormHooks from './FormHooks';
import FormInputHook from './FormInputHook';
import Toggler from './Toggler';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterClass />
        <CounterHooks />
        <Toggler />
        <FormClass />
        <FormHooks />
        <FormInputHook />
      </div>
    );
  }
}

export default App;
