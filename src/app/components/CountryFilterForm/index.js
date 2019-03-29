import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.scss';

const invalidFormat = /[!@#$%^&*(),.?":{}|<>|\d]/g;

class CountryFilterForm extends Component {
  state = {
    search: '',
    error: false
  };

  isValidCountryFormat = country => !invalidFormat.exec(country);

  handleSearchChange = event => this.setState({search: event.target.value});

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    const { error } = this.state;
    return (
      <form className="search-container" onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          <input name="search" onChange={this.handleSearchChange} className={`search-input ${error ? 'error' : ''}`} type="text" placeholder="Ingrese el nombre del país a buscar" />
          {error && (
            <span className="error-message">
              Ingresar sólo letras y espacios
            </span>)}
        </div>
        <button className="search-button" type="submit">Buscar</button>
      </form>
    )
  }
}

CountryFilterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default CountryFilterForm;
