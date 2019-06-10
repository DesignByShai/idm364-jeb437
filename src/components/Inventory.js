import React, { Component } from 'react';
import EditSignForm from './EditSignForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2 className="SubHeader">Records Inventory</h2>
        {Object.keys(this.props.signs).map(key => (
          <EditSignForm
            key={key}
            index={key}
            sign={this.props.signs[key]}
            updateSign={this.props.updateSign}
            deleteSign={this.props.deleteSign}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;