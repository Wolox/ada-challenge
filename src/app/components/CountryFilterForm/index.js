import React, { Component } from 'react';

import './styles.scss';

const invalidFormat = /[!@#$%^&*(),.?":{}|<>|\d]/g;

class CountryFilterForm extends Component {

  isValidCountryFormat = (country) => !invalidFormat.exec(country)

  render() {
    return (
      <form class="search-container" noValidate>
        <input class="search-input" type="text" placeholder="Ingrese el nombre del país a buscar" />
        <button class="search-button" type="submit">Buscar</button>
      </form>
    )
  }
}

export default CountryFilterForm;
