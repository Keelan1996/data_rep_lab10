const express = require('express')  // this is new body parser included in express
const app = express()
const port = 4000
const cors = require('cors'); // getting cors


// server 

// this included to avoid cors error
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
// this is used as a bodyparser now with new update 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

// api for movies, get method that sends json back to the client when invoked
app.get('/api/movies', (req, res)=>{
   
    // json movies hardcoded
    const mymovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];

    // json pass down to server (response)
res.status(200).json({
        
        // can pass more example:
    message: "Everything is okay!",
        
    movies:mymovies});

})

// when data gets passed up this logs it into console
app.post('/api/movies', (req,res)=>{
   
    // pulls this middleware
    console.log('Movie Recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

})

// listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

