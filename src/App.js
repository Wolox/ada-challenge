import React, { Component } from 'react';

import Countries from './app/screens/Countries';

import CountryFilterForm from './app/components/CountryFilterForm';




class App extends Component {
  render() {
    return (
    	<div>
    		<CountryFilterForm />
    		<Countries />
    	</div>
    );
  }
}

export default App;
