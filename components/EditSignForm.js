import React, { Component } from 'react';

class EditSignForm extends Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);

    // Take a copy of the current fish
    const updatedSign = {
      ...this.props.sign,
      // ES6 dynamically get the 'name' attribute of the
      // input element that is being updated.
      // [event.currentTarget.name]
      // Then set the value to whatever is entered in that input:
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedSign);
    this.props.updateSign(this.props.index, updatedSign);
  };

  render() {
    return (
      <div className="sign-edit">
        <div className="controlgroup">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.props.sign.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="controlgroup">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            onChange={this.handleChange}
            value={this.props.sign.status}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="controlgroup">
          <textarea
            name="desc"
            onChange={this.handleChange}
            value={this.props.sign.desc}
          />
        </div>
      </div>
    );
  }
}

export default EditSignForm;