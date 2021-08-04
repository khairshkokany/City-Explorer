import React from 'react';

class Title extends React.Component {
  render() {
    return(
      <>
       <p className='name'>{this.props.city}</p>
<p className='name'>this is latitude:{this.props.lat}</p>
<p className='name'>this is longitude:{this.props.lon}</p>
      </>
    )
  }
}

export default Title;