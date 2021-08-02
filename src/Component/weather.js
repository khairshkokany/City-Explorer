import React from 'react';
// import axios from 'axios';


class weather extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            timeDate:'',
            description:''
        }
    }

    // getWeatherInfo = async()=>{
     
    //     let URL = `${process.env.REACT_APP_SERVER_URL}/weather?searchQuery=Amman`;
    //     let weatherData = await axios.get(URL);

    //     this.setState({
    //         timeDate : weatherData.data.timedate,
    //         description : weatherData.data.description
    //     })
    //     console.log(this.state.description);
    // }

    render() {

        return(
            <>

          {/* <div >handleClick={this.getWeatherInfo}</div> */}
         <p>{this.state.timeDate}</p>
        <p>{this.state.description}</p>
         
            </>
        )
    }

}


export default weather;