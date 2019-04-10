import React, { Component } from 'react';

//import './styles.css';
import './styles.scss';

import countries from '../../constants/countries.js';

class Countries extends Component {

  constructor(props){
    super(props);

    this.state = {
      //paises:[]
      countries: countries
    }

  }


  render() {

    const paises = this.state.countries.map(function(pais){

      return (
        <div className="country">
          <img src={pais.flag} className="country-flag" alt="bandera"/>
          <h5 className="country-name">{pais.name}</h5> 
          <div className="country-info-wrapper">
            <p className="country-info-region">{pais.region}</p> 
            <p className="country-info-population">{pais.population}</p>
          </div>
        </div>
      );
    });

    return (
      <main className="main-container">
        <h1 className="countries-title">Paises</h1>
        <ul className="countries-container">
          {
            // Agregar los países aqui
            <li className="country-info-wrapper">{paises}</li>             
            
          }
        </ul>
      </main>
    );
  }
}

export default Countries;
