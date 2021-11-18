// imports react
import React from 'react';
import axios from 'axios'; //talks http

// class for the create component// extends and export word used to export app.js
export class Edit extends React.Component {

    // form

    constructor() {

        super();
        
        // must bind
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''


        }


    }// constructor

    // pulling the ID PARAMETER out of the URL lab8
    componentDidMount(){
        
        // traps ID to console
        console.log(this.props.match.params.id);
        
        // puts ID in the url
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response=>{
            
            // This get request will get a document in the database by its ID using the method in the server
            // and then below returns the documents data, allowing you to edit/change the document
            // and keep the original ID
            this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Poster:response.data.poster

            })

        })
        .catch((error)=>{
            console.log(error);

        });
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value

        });

    }

    onChangeYear(e){
         this.setState({
            Year: e.target.value

         });

    }

    onChangePoster(e){
        this.setState({
              Poster: e.target.value
        })

    }
    // invokes when submitted
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title+ " "+ this.state.Year+ " "+this.state.Poster);

        // http client
        
        const newMovie = {
            //object that sends data

            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            
            // lab8 id
            _id: this.state._id
           

        }


        // passing up the new data to the url
        // passes up the newMovie data object
        // send the new data movie you want to edit
        // once the movi
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
         
        .then(res =>{
            
            console.log(res.data)

         })
         .catch();
   

}

    render() {

        // returning component

        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    
                    <div className="form-group">
                        <label>Add Moive Year:</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}>
                        </input>
                    </div>
                    
                    <div className='form-group'>
                    <label>Movies Poster:</label>
                    <textarea type='text'
                    className='form-control'
                    value={this.state.Poster}
                    onChange={this.onChangePoster}>
                    


                    </textarea>
                    
                    </div>
                    



                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'>
                        </input>
                    </div>







                </form>
            </div>



        );//return

    }// render

}//class