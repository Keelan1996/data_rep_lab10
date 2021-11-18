
// imports react
import React from 'react';
import Card from 'react-bootstrap/Card'; // card import
import {Link} from 'react-router-dom'; // link helps change URL

// class for the movieItem component// extends and export word used to export app.js
export class MovieItem extends React.Component {

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

                </Card>


            </div>

        );//return

    }// render

}//class