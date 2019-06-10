import React, { Component } from 'react';

class Button extends Component {
  state = {
    message: ''
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.loadSigns();
          }}
        >
          Load Signs
        </button>
      </React.Fragment>
    );
  }
}

export default Button;