import React, { Component } from 'react';

import './styles.css';
import argentina from '../../constants/argentina';

class Country extends Component {
  render() {
    return (
    <div className="main-container">
      <h1 className="country-title">{this.argentina.country_name}</h1>
      <div className="country-container">
        <div className="images-container">
        {/* <img> { argentina.images[0]} </img> */}
       
        </div>
        <ul className="country-info">
          <li>{argentina.}</li>
        {/*  Acá va la información del país */}
        </ul>
      </div>
    </div>
    );
  }
}

export default Country;
