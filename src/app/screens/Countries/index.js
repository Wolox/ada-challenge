import React, { Component } from 'react';

import './styles.css';

class Countries extends Component {
  render() {
    return (
    <div className="main-container">
      <h1 className="countries-title">Paises</h1>
      <div className="countries-container">
        {
          // Agregar los países aqui
        }
      </div>
    </div>
    );
  }
}

export default Countries;
