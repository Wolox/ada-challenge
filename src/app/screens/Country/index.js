import React, { Component } from 'react';

import './styles.css';

class Country extends Component {
  render() {
    return (
    <div className="main-container">
      <h1 className="country-title">Nombre del pais desde constante o api</h1>
      <div className="country-container">
        <div className="images-container">
        {/*  Acá van las 4 imágenes */}
        </div>
        <ul className="country-info">
        {/*  Acá va la información del país */}
        </ul>
      </div>
    </div>
    );
  }
}

export default Country;
