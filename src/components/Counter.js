import React from 'react';

const containerStyle = {
  display: 'flex'
}

const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

class Counter extends React.Component {
  state = {
    number: 0
  };

  increaseByOne = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  decreaseByOne = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.number}</h1>
          <div style={containerStyle}>
            <button type="button" style={buttonStyle} onClick={this.decreaseByOne}>-</button>
            <button type="button" style={buttonStyle} onClick={this.increaseByOne}>+</button>
          </div>
        </header>
      </div>
    );
  };
}

export default Counter;
