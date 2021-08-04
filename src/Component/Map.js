
import React from 'react';


class Map extends React.Component {
  render() {
    return(
       
      
<img src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.key}&center=${this.state.lat},${this.state.lon}`} alt='mapsImg' />
  
    )
  }
}

export default Map;






