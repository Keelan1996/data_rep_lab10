
// imports react
import React from 'react';

// class for the create component// extends and export word used to export app.js
export class Create extends React.Component {

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

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title+ " "+ this.state.Year+ " "+this.state.Poster);

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
                            value='Add Movie'
                            className='btn btn-primary'>
                        </input>
                    </div>







                </form>
            </div>



        );//return

    }// render

}//class