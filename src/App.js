import React, {Component} from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import styled from 'styled-components';

import './App.scss';

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Title>Haloooooo</Title>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
