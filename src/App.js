import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.addCount = this.addCount.bind(this);
    this.state = {
      count: 0
    }
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.addCount}>Incrementa</button>
      </div>
    );
  }
}

export default App;
