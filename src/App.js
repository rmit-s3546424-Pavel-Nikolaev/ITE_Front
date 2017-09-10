import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Uploader from './components/Uploader';

class App extends Component {
  constructor(props) {
    super(props);
    this.apihost = "https://9b48i00s23.execute-api.us-east-1.amazonaws.com/beta";
    this.apikey = "y7VWoLrjoI9m9PEzOnEF83hbNc8g5ay52iq3RCjA";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        { 
          // TODO. Replace api key with session token stored in local storage after auth. 
          // Quick and easy to test with api key.
        }
        <Uploader apikey={this.apikey} host={this.apihost} />
      </div>
    );
  }
}

export default App;
