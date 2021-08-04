import React from 'react';

class Title extends React.Component {
  render() {
    return(
      <>
       <p className='name'>{this.state.cityName}</p>
<p className='name'>this is latitude:{this.state.lat}</p>
<p className='name'>this is longitude:{this.state.lon}</p>
      </>
    )
  }
}

export default Title;