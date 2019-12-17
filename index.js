import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './components/homepage/Header';
import Dashboard from'./components/Dashboard/Dashboard';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <Dashboard />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
