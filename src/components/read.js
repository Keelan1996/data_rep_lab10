
// imports react
import React from 'react';
import { Movies } from './movies'; // imports movie component and used down below <movies>

// class for the read component// extends word used to export app.js
export class Read extends React.Component{

    // state to store data in this class
    state = {

        // movies holding json data about 3 movies.

        movies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]


    }; // state

    render(){

        // returning component

        // movies data in read component, have <movies> here that connects the two components
        // with the "<Movies movies ={this.state.movies}> " sends the data in the read component (state) and send it to
        // the movies class/component where it sends back the formatted movie data from the movieItem component that's inbeeded in it and sent back to the read component which has a page on the website
        // that will show the movie data that was formatted and sent back
         
        return(
            <div>
              
              <h1>This is the Read Component!</h1>

              <Movies movies ={this.state.movies}>  </Movies>

            </div>

        );//return
   
    }// render

}//class