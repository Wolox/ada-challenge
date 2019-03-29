import React, { Component } from 'react';

import './styles.css';

class Countries extends Component {
  render() {
    return (
    <main className="main-container">
      <h1 className="countries-title">Paises</h1>
      <ul className="countries-container">
        {
          // Agregar los países aqui
        }
      </ul>
    </main>
    );
  }
}

export default Countries;
