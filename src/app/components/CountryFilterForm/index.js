import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.scss';

const invalidFormat = /[!@#$%^&*(),.?":{}|<>|\d]/g;

class CountryFilterForm extends Component {

  isValidCountryFormat = (country) => !invalidFormat.exec(country);

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.onSubmit(data.search);
  }

  render() {
    return (
      <form class="search-container" noValidate onSubmit={this.handleSubmit}>
        <input name="search" class="search-input" type="text" placeholder="Ingrese el nombre del país a buscar" />
        <button class="search-button" type="submit">Buscar</button>
      </form>
    )
  }
}

CountryFilterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default CountryFilterForm;
