import React, { Component } from 'react';

class CartButton extends Component {
  state = {
    message: ''
  };

  render() {
    return (
      <React.Fragment>
        <button
        //   onClick={() => {
        //     this.props.clickHandler();
        //   }}
        >
          Load Signs
        </button>
      </React.Fragment>
    );
  }
}

export default CartButton;