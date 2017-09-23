import React, { Component } from 'react';
import Uploader from './uploader.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.apihost = "https://9b48i00s23.execute-api.us-east-1.amazonaws.com/beta";
    this.apikey = "y7VWoLrjoI9m9PEzOnEF83hbNc8g5ay52iq3RCjA";
  }

  // TODO. Replace api key with session token stored in local storage after auth. 
  // Quick and easy to test with api key.
  render() {
    return (
        <Uploader apikey={this.apikey} host={this.apihost} />
    );
  }
}

export default App;
