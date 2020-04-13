import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

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
    this.props.dispatch({type: 'INCREASE_ONE'});
  }

  decreaseByOne = () => {
    this.props.dispatch({type: 'DECREASE_ONE'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div style={containerStyle}>
            <button type="button" style={buttonStyle} onClick={this.decreaseByOne}>-</button>
            <button type="button" style={buttonStyle} onClick={this.increaseByOne}>+</button>
          </div>
        </header>
      </div>
    );
  };
}

export default connect(mapStateToProps)(Counter);
