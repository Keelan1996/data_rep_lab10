// imports react
import React from 'react';

// class for the middle content component// extends word used to export app.js
export class Content extends React.Component {

    render() {

        // returning component

        return (
            <div>

                <h1> Hello World </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>

            </div>

        );//return

    }// render

}//class