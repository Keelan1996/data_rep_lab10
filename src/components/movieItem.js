
// imports react
import React from 'react';
import Card from 'react-bootstrap/Card'; // card import
import {Link} from 'react-router-dom'; // link helps change URL
import Button from 'react-bootstrap/Button'; // button from bootstrap
import axios from 'axios'; // axios for delete method


// class for the movieItem component// extends and export word used to export app.js
export class MovieItem extends React.Component {

    // binding to instance
    constructor(){
       super();

       this.DeleteMovie = this.DeleteMovie.bind(this);

        
    }
    
    
    // delete movie method when button pressed
    DeleteMovie(e){


        // stops this method happening every time page is refreshed which could cause multiple unnecessary deletes
        e.preventDefault();

          // logs to console the ID which was pressed to be deleted
          console.log("Delete: "+this.props.movie.id);

          // calls delete to this URL and when it gets ID from the URL, ID in database is deleted
          axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
           .then(()=>{
            // calls reload data method
            this.props.ReloadData();

           })
           .catch();
    }
    
    
    
    
    render() {

        // returning component

        // returns the format of the movie data back to the "movies" class, which in turn sends it back to the "read" class

        // add an edit button with the link inside the card lab8

        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            
                            <footer className="blockquote-footer">
                                
                                {this.props.movie.year}
                            
                            </footer>
                        </blockquote>
                    </Card.Body>
                     
                    
                    <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>


                  <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>

                </Card>


            </div>

        );//return

    }// render

}//class