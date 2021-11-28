
// imports react
import React from 'react';
import { MovieItem } from './movieItem'; // movie item import

// class for the movie component// extends and export word used to export app.js
export class Movies extends React.Component{

    render(){

        // returning component

        //splits movieItem into 3 items because map() and 3 sets of data
        // movies now holds 3 seprate movieItem's

        // "movie = {movie}"" passes the movie data colllection to MovieItem class, that the "movie" variable from 
        //" return this.props.movies.map( (movie)=>" got
         
        return this.props.movies.map( (movie)=>{
          
            return <MovieItem movie = {movie} ReloadData={this.props.ReloadData} ></MovieItem>

            
        
        
        })
           
   
    }// render

}//class