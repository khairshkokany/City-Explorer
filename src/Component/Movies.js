import React from 'react';
// import axios from 'axios';


class movies extends React.Component {


  
    render() {
console.log(this.props.movie);
        return(
            this.props.movie.map((item)=>(
                <>
                
                <p> {item.title}</p>
                <p>{item.overview}</p>
                <p>{item.vote_average}</p>
                <p>{item.vote_count}</p>
                
                <img src={item.poster_path} alt = ''/>
                <p>{item.popularity}</p>
                
                <p>{item.release_data}</p>
               
                
                {/* <p> {item.description}</p>
                <p>{item.dateTime}</p>
                
                <p> {item.description}</p> */}
                </>

            )
            )
        )
        }


    }

export default movies;