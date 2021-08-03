import React from 'react';
// import axios from 'axios';


class weather extends React.Component {


  
    render() {

        return(
            this.props.weather.map((item)=>(

                <>
                <p>Date : {item.date}</p>
                <p>Description : {item.description}</p>
                </>
            )
            )
        )
        }


    }

export default weather;