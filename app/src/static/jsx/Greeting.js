import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../css/Greeting.css';

class Greeting extends Component {
  render() {
    return (
      <div className="greeting">
        <header className="greeting-header">
          <img src={logo} className="greeting-logo" alt="logo" />
          <h1 className="greeting-title">Welcome to React</h1>
        </header>
        <p className="greeting-intro">
          To get started, edit <code>src/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Greeting;

