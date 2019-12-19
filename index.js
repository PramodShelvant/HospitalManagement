import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './components/homepage/Header';
import Dashboard from'./components/Patient/dashboard';
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
        <Header />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
