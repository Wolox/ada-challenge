import React, { Component } from 'react';

// import './styles.css';
import './styles.scss';
import countries from '../../constants/countries';

class Countries extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries:countries
    }
  }

  render() {
    const countries = this.state.countries.map((country, i)=> {
      return (
        <div className="country" key={i}>
          <img src={country.flag} className="country-flag" alt=""/>
          <p className="country-name">{country.name}</p>
          <div className="country-info-wrapper">
            <span className="country-info-region">{country.region}</span>
            <span className="country-info-population">{country.population}</span>
          </div>
        </div>
      )
    })

    return (
    <main className="main-container">
      <h1 className="countries-title">Paises</h1>
      <ul className="countries-container">
        { countries }
      </ul>
    </main>
    );
  }
}

export default Countries;