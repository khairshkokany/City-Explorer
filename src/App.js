import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      cityName : '',
      lat : '',
      lon :'',
      showMap:false,
      showErr : false,
      error : 'Hello This is your error if our today , Thank You! '
    }

    }

    

    getLocation= async(e)=>{
      e.preventDefault();
      let CityInput = e.target.city.value;
      console.log(CityInput);
      
      let key = 'pk.48dbe3588abb5a8cc8ef84cef530f4bd';
      let URL = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${CityInput}&format=json`;
      try{
        
        let getData = await axios.get(URL);
        console.log(getData.data[0].display_name)
        this.setState ({
          cityName : getData.data[0].display_name,
          lat : getData.data[0].lat,
          lon : getData.data[0].lon,
          showMap : true,
          key :'pk.48dbe3588abb5a8cc8ef84cef530f4bd'

        });
      }
      catch {

      this.setState ({
        showMap : false,
        showErr : true
      })

      }

    };

render(){
  return (
<>
<h1>City Explorer</h1>
<Form id='form' onSubmit={this.getLocation}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control className='control' type="city" placeholder="Enter City" name ="city"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button  variant="primary" type="submit">
    Explore!
  </Button>
</Form>

<p className='name'>{this.state.cityName}</p>
{
this.state.showMap &&
<img src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.state.lat},${this.state.lon}`} alt='mapsImg' />

}

{

  this.state.showErr && 
  this.state.error
}


</>

  )
}



}

export default App;