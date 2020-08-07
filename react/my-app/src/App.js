import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);
const messages = ['React', 'Re: React', 'Re:Re: React'];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {listItems}
        </div>
      </div>
    );
  }
}

export default App;
