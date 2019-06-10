import React, { Component } from 'react';

class Cart extends Component {
    state = {
      message: ''
    };

    render() {
        return (
            <table>
            <tbody>
              {Object.keys(this.props.signs).map(key => (
                 <tr key={this.props.signs[key]}>
                 <div className="ArtistGrid">
                 <td> 
                     <img className="AlbumArt" src={this.props.signs[key].image} alt="band_imag" />
                     {/* <div class="PlayButtonDiv"><PlayButton /></div> */}
                     <div className="AlbumDescription">
                     <h2>{this.props.signs[key].name}</h2> 
                     <h3>{this.props.signs[key].desc}</h3>
                     <h3>{this.props.signs[key].price}</h3>
                     <div>
                     <p>{this.props.signs[key].name}</p>
                     </div>
                     </div>
                 </td>
                 </div>
             </tr>
              ))}
          </tbody>
          </table>
        );
      }
    }
    
    export default Cart;