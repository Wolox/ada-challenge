import React, { Component } from 'react';

import './styles.css';

class Country extends Component {
  render() {
    return (
    <div className="main-container">
      <h1 className="country-title">Nombre del pais</h1>
      <div className="country-container">
        {
          // Agregar los la información del pais aquí
        }
      </div>
    </div>
    );
  }
}

export default Country;
