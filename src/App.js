import React from 'react';
import axios from 'axios';
import Weather from './Component/weather'
import Title from './Component/titleCity'
import Map from './Component/Map'
import SearchForm from './Component/searchForm'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      latitude: '',
      longitude: '',
      searchQuery: '',
      showMap: false,
      showErr: false,
      error: 'Hello This is your error if our today , Thank You! '

    }

  }

  updateCityName = (event) => {
    this.setState({
      searchQuery: event.target.value

    });

  }

  displayLatLon = async () => {
    // let key = 'pk.48dbe3588abb5a8cc8ef84cef530f4bd';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=pk.48dbe3588abb5a8cc8ef84cef530f4bd&q=${this.state.searchQuery}&format=json`;
    let cityName;

    try {

      let getData = await axios.get(URL);
      console.log(getData.data[0].display_name)
      this.setState({
        cityName: getData.data[0].display_name,
        latitude: getData.data[0].lat,
        longitude: getData.data[0].lon,
        showMap: true,




      });
      this.displayWeather(cityName.data[0].lat, cityName.data[0].lon)
    }
    catch (error){

      this.setState({
        showMap: false,
        showErr: true
      });

    }
  }

  displayWeather = async (lat, lon) => {

    try {

      const weather = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lon=${this.state.lon}&lat=${this.state.lat}`);
      console.log(weather);
      this.setState({
        weather: weather.data

      })
    }
    catch (error){

      this.setState({
        showMap: false,
        showErr: true

      })
    }
  }


  render() {

    return (
      <>

        <SearchForm

          updateCityName={this.updateCityName}
          displayLatLon={this.displayLatLon}
          error={this.state.showErr}


        />


        {this.state.displayMap &&
          <>
            <>
              <>
                <Title
                  cityName={this.state.cityName}
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
              </>
            </>
            <>
              <>
                <Map
                  img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.latitude},${this.state.longitude}&format=jpg`}
                  city={this.state.cityName}
                />
              </>
            </>
            <>
              <>
                <Weather
                  weather={this.state.weather}
                />
              </>
            </>
          </>
        }
      </>
    )
  }
}

export default App;