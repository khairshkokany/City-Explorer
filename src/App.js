import React from 'react';
import axios from 'axios';
import Weather from './Component/Weather'
import Title from './Component/TitleCity'
import Map from './Component/Map'
import Movies from './Component/Movies'

import SearchForm from './Component/SearchForm'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Weather from './Component/weather';

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
      weather:[],
      movie:[],
      error: ''
    }

  }

  updateCityName =  (e) => {
    this.setState({
      searchQuery: e.target.value

    });

  }

  displayLatLon = async () => {
    // let key = 'pk.48dbe3588abb5a8cc8ef84cef530f4bd';
    const URL = `https://us1.locationiq.com/v1/search.php?key=pk.b7ed2f8e0794d736835db8eecf4aa23f&q=${this.state.searchQuery}&format=json`;
    let cityName;

    try {

      cityName = await axios.get(URL);
      console.log(cityName.data[0].display_name)
      this.setState({
        cityName: cityName.data[0].display_name,
        latitude: cityName.data[0].lat,
        longitude: cityName.data[0].lon,
        showMap: true,
        showErr : false

      });
      this.displayWeather(cityName.data[0].lat, cityName.data[0].lon)
      
    }
    catch (error){

      this.setState({
        showMap: false,
        showErr: true,
        error : error.response.status + ': ' + error.response.data.error 
      });

    }
  }
  

  displayWeather = async (lat, lon) => {

    try {

      const weather = await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?q=${this.state.searchQuery}&lon=${this.state.longitude}&lat=${this.state.latitude}`);

      console.log(weather);
      this.setState({
        weather: weather.data,
        
      })


      const movie = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.searchQuery}`)
      console.log(movie);
      this.setState({
        movie : movie.data

      })
    }
    catch (error){

      this.setState({
        showMap: false,
        showErr: true,
        error : error.response.status + ': ' + error.response.data.error 

      })
    }
  }


  render() {

    return (
      <>

        <SearchForm

          updateCityName={this.updateCityName}
          displayLatLon={this.displayLatLon}
          showErr={this.state.showErr}
          error = {this.state.error}



        />


        {this.state.showMap &&
          <>
            
                <Title
                  city={this.state.cityName}
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
           
            
                <Map
                  img_url={`https://maps.locationiq.com/v3/staticmap?key=pk.b7ed2f8e0794d736835db8eecf4aa23f
                  &center=${this.state.latitude},${this.state.longitude}&format=jpg`}
                  city={this.state.cityName}
                />
            
           
              
                <Weather
                  weather={this.state.weather}
                />

                <Movies
                movie={this.state.movie}
                />
                
             
            
          </>
        }
      </>
    )
  }
}

export default App;