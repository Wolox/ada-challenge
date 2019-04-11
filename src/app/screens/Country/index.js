import React, { Component } from 'react';

import './styles.scss';

import argentina from '../../constants/argentina';
import { getCountries } from '../../services/countries';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryName:'',
      countryCapital:'',
      countryLanguage:'',
      countryCurrency:'',
      countryPopulation:'',
      countryTimeZone:'',
      countryImages:[]
    }
  }
  componentDidMount(){
    getCountries().then(country => {
      this.setState({
        countryName: country.country_name,
        countryCapital: country.capital_city,
        countryLanguage: country.national_language,
        countryCurrency: country.currency,
        countryPopulation: country.population,
        countryTimeZone: country.time_zone,
        countryImages: country.images
      })
    })
  }
  render() {
    console.log(this.state.countryImages)
    const images = this.state.countryImages.map (i => <img className="country-image" src={i}/>)
    return (

    <div className="main-container">
      <h1 className="country-title">{this.state.countryName}</h1>
      <div className="country-container">
        <div className="images-container">
        {images}
        </div>
        <ul className="country-info">
          <li><span className ="country-info-label">Capital:</span><span className= "country-info-text">{this.state.countryCapital}</span></li>
          <li><span className ="country-info-label">National Language:</span><span className= "country-info-text">{this.state.countryLanguage}</span></li>
          <li><span className ="country-info-label">Currency:</span><span className= "country-info-text">{this.state.countryCurrency}</span></li>
          <li><span className ="country-info-label">Population:</span><span className= "country-info-text">{this.state.countryPopulation}</span></li>
          <li><span className ="country-info-label">Time Zone:</span><span className= "country-info-text">{this.state.countryTimeZone}</span></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Country;
