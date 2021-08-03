import React from 'react';

import Cards from './components/Cards/Cards.jsx';
import Chart from './components/Chart/Chart.jsx';
import CountryPicker from './components/CountryPicker/CountryPicker.jsx';

import { fetchData } from './api';

import './App.scss';

import covidImage from './Images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch data
    const fetchedData = await fetchData(country);
    // console.log(data);
    // console.log(country);

    // set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img src={covidImage} className="image" alt="COVID-19" />

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
