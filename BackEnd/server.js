const express = require('express')  // this is new body parser included in express
const app = express()
const port = 4000
const cors = require('cors'); // getting cors
const mongoose = require('mongoose'); // mongoose for database
const path = require('path'); // lab10 path

// server 

//add just under import section at the top of server,js lab10
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));






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




// mongoose connection string, TO CONNECT TO THE DATABASE (lab7)
 main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.7dde6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

// mongoose schema
const Schema = mongoose.Schema;

// what type of data im going to store, into database. what the database will look like
var movieSchema = new Schema({

 title:String,
 year:String,
 poster:String

});

// use this model which has our movieschema, so refer to this when want to
// interact with the database, allows to write data to database
var MovieModel = mongoose.model("movie", movieSchema); // name of database website given is movie








// api for movies, get method that sends json back to the client when invoked
app.get('/api/movies', (req, res)=>{
   
    // json movies hardcoded
    // const mymovies = [
    //     {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    // ];

    
    
    //a method that reads all data from the database and gets it to display on the react
    // app(lab7)
    MovieModel.find(function (err, data) {

    // reads data to console
    console.log(data);
    
    
    res.json(data);

    });

    
    
    // // json pass down to server (response)
    // res.status(200).json({
        
    //     // can pass more example:
    // message: "Everything is okay!",
        
    // movies:mymovies});

})


// a method that reads a document/movie by id from your database in your node/express
//server.(lab7)
// get request for localhost:4000/api/movies
app.get('/api/movies/:id', (req, res, next) => {

// requests id and logs to console
console.log(req.params.id);

// find id in the database
MovieModel.findById(req.params.id, // takes id

// call back function
function (err, data) {
    
    // what to do once we get id data, sends back data in json. so brings up json data to the url:
    //http://localhost:4000/api/movies/6190237f9455352647817cdb end part was the id
    // used if you want to find a specfic movie or something 
     
     res.json(data);

       
    });
})

// put to edit records lab8
app.put('/api/movies/:id', (req,res)=>{
     
     console.log("Update movie: "+req.params.id);
     console.log(req.body);

      
    // asynch call to database, find record with matching ID
    // it contains req.body which is the new movie info, overides the record
    

     MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
      (err,data)=>{
        
        // then this callback function sends back data
        res.send(data);

      })

})

// listening for a delete method
// goes to this url
app.delete('/api/movies/:id', (req,res)=>{

  // log to console the data ID out of the URL
  console.log("Delete Movie: "+req.params.id);
  
  // find the ID IN THE DATABASE and delete it
  MovieModel.findByIdAndDelete(req.params.id,(err,data)=>{
    
    // then will send new updated data
    res.send(data);

  })


})






// when data gets passed up this logs it into console
app.post('/api/movies', (req,res)=>{
   
    // pulls this middleware
    console.log('Movie Recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

  
  // interact with model, writing data recieved from application to write to database(lab7)
  MovieModel.create({
    
    title:req.body.title,
    year:req.body.year,
    poster: req.body.poster
      })

    // send msg back so not to duplicate because it will know it had sent
    res.send('Item Added');
})



// Handles any requests that don't match the ones above lab10
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  

// listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

