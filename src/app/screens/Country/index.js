import React, { Component } from 'react';

import './styles.scss';
import argentina from '../../constants/argentina'

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arg: argentina
    }
  }

  render() {
    const arg = this.state.arg;
    return (
    <div className="main-container">
      <h1 className="country-title">{arg.country_name}</h1>
      <div className="country-container">
        <div className="images-container">
        {/*  Acá van las 4 imágenes */
          arg.images.map((item, key) => (
            <figure key={key}>
              <img className="country-image" src={ item }/>
            </figure>
          ))
        }
        </div>
        <ul className="country-info">
        {/*  Acá va la información del país */
          <section>
            <section>
            <p className="country-info-label">Capital: </p><p className="country-info-text">{arg.capital_city}</p>
          </section>
          <section>
            <p className="country-info-label">National Language: </p><p className="country-info-text">{arg.national_language}</p>
          </section>
          <section>
            <p className="country-info-label">Currency: </p><p className="country-info-text">{arg.currency}</p>
          </section>
          <section>
            <p className="country-info-label">Population: </p><p className="country-info-text">{arg.population}</p>
          </section>
          <section>
            <p className="country-info-label">Time Zone: </p><p className="country-info-text">{arg.time_zone}</p>
          </section>
          </section>
        }
        </ul>
      </div>
    </div>
    );
  }
}

export default Country;
