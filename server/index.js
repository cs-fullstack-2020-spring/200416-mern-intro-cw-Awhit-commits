//Importing files from express module
const express = require('express');

//Storing port number in variable
const port = 8000


const app = express();

//Importing the api route
let api = require('./routes/api')

//Mounting the api endpoint
app.use('/api',api)
const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/cs_database?retryWrites=true&w=majority'

console.log(`Connecting to mongoDB at ${mongoDB}`)
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Starting my server

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

