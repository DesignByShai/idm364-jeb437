import React, { Component } from 'react';
import Button from './Button';
import CartButton from './CartButton';
import Cart from './Cart';
import signs from '../js/signs.js';
import Inventory from './Inventory';
import base from '../js/base';

class App extends Component {
  state = {
    signs: [],
    cart: []
  };

  addCart = (key, addCart) => {
    console.log("update sign");
    const cart = { ...this.state.cart };
   // 2. update that state key/value
    cart[key] = addCart;
   // 3. set the new copy to the component state
    this.setState({ cart });
  }

  clickHandler= (event) => {
   const item = {
    price: event.currentTarget.value,
    name: event.currentTarget.name

  }
  this.addCart(event.currentTarget.key, item)
  }

  hoverHandler() {
    console.log('Hovering over my button!');
  }

  componentDidMount() {
    this.ref = base.syncState('signs', {
      context: this,
      state: 'signs'
    });
  }

  loadSigns = () => {
    this.setState({ signs });
  };

  updateSign = (key, updatedSign) => {
    // console.log('update sign');
    // 1. copy the current state
    const signs = { ...this.state.signs };
    // 2. update that state key/value
    signs[key] = updatedSign;
    // 3. set the new copy to the component state
    this.setState({ signs });
  };

  deleteSign = () => {
    console.log('delete sign');
  };

  render() {
    return (
      <>
      <h1 className="BoredHeader">ClinicallyBoredRecords</h1>
      <h2 className="SubHeader">Records In Stock</h2>
        <div className="app">
          <ul className="signs">
          {Object.keys(this.state.signs).map(key => (
            <li key={this.state.signs[key]}>
                <img className="AlbumArt" src={this.state.signs[key].image} alt="band_imag" />
                <h2>{this.state.signs[key].name}</h2> 
                <h3>{this.state.signs[key].desc}</h3>
                <h3>{this.state.signs[key].status}</h3>
                <h3>{this.state.signs[key].price}</h3>
                <button onClick={this.clickHandler} value={this.state.signs[key].name} name={this.state.signs[key].name} key={this.state.signs[key]}>add to cart</button>
            </li>
          ))}
          </ul>
          <section className="admin">
            <Button loadSigns={this.loadSigns} />
            <Inventory
              updateSign={this.updateSign}
              deleteSign={this.deleteSign}
              signs={this.state.signs}
            />
          </section>
          <div>
          <Cart 
            clickHandler={this.clickHandler} onMouseOver={this.hoverHandler}
            signs={this.state.cart}
          />
          </div>
        </div>
        </>
    );

  }
}

export default App;
