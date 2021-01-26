import React from 'react';
import { Cards, Charts, CountryPicker}  from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covidImage from './assets/images/covidImage.png';
class App extends React.Component {
  state = {
     data: {},
     country: ''
  }
  async componentDidMount() {
    // Format of fetchedData => data: {confirmed, recovered, deaths, lastUpdate}
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  async handleCountryChange(country) {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country});
  }
  render() {
    const { data, country } = this.state;
    console.log("data", data);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="Covid"></img>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange.bind(this)}></CountryPicker>
        <Charts data={data} country={country}></Charts>
      </div>
      
    );
  }
}

export default App;
