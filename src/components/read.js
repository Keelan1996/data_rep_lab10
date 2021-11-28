
// imports react
import React from 'react';
import { Movies } from './movies'; // imports movie component and used down below <movies>
import axios from 'axios'; // for json to ask for info asynchronous



// class for the read component// extends word used to export app.js
export class Read extends React.Component {

    // constructor to bind reload method
   constructor(){
        super();


        this.ReloadData = this.ReloadData.bind(this);


   }


    // state to store data in this class
    state = {

        // movies holding json data about 3 movies.

        movies: [ ]


    }; // state

    // gets data from data base and puts it on website to be read
    componentDidMount() {

        // get the json blob, ***from local host server now (lab6)
        axios.get('http://localhost:4000/api/movies')
         
        // then set the response onto the state movie array and that will display
        .then((response) => {
                    this.setState({ movies: response.data}) // (lab7) took out .movies array cause wasn't there
                }

            )
        // shows what error if something goes wrong
        .catch(
                (error) => {
                  console.log(error);

                  }

            );

    }// didmount

    // Reloads data in the database without refreshing when data is changed
    
    ReloadData(){

        // get the json blob, ***from local host server now (lab6)
        axios.get('http://localhost:4000/api/movies')
         
        // then set the response onto the state movie array and that will display
        .then((response) => {
                    this.setState({ movies: response.data}) // (lab7) took out .movies array cause wasn't there
                }

            )
        // shows what error if something goes wrong
        .catch(
                (error) => {
                  console.log(error);

                  }

            );



    }

    render() {

        // returning component

        // movies data in read component, have <movies> here that connects the two components
        // with the "<Movies movies ={this.state.movies}> " sends the data in the read component (state) and send it to
        // the movies class/component where it sends back the formatted movie data from the movieItem component that's inbeeded in it and sent back to the read component which has a page on the website
        // that will show the movie data that was formatted and sent back

        return (
            <div>

                <h1>This is the Read Component!</h1>
                 
                 
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}>  </Movies>

            </div>

        );//return

    }// render

}//class