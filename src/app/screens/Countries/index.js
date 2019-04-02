import React, { Component } from "react";
import listOfCountries from "../../constants/countries";
import "./styles.css";

class Country extends Component {
  state = {};

  render() {
    return (
      <li>
        {this.props.name}. Poblacion: {this.props.poblacion}. Region:{" "}
        {this.props.region}
      </li>
    );
  }
}

//export default Country;

class Countries extends Component {
  state = {
    countriesList: listOfCountries
  };

  renderCountries = () => {
    let countries = [];
    for (let i = 0; i < 8; i++) {
      const country = (
        <Country
          name={this.state.countriesList[i].name}
          poblacion={this.state.countriesList[i].population}
          region={this.state.countriesList[i].region}
          flag={this.state.countriesList[i].flag}
        />
      );
      countries.push(country);
    }
    return countries;
  };

  render() {
    console.log(this.state.countriesList);
    return (
      <main className="main-container">
        <h1 className="countries-title">Paises</h1>
        <ul className="countries-container">
          {this.renderCountries()}
        </ul>
      </main>
    );
  }
}

export default Countries;
