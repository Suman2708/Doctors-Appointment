const mongoose=require('mongoose');
const express =require("express");
const app=express();
const bodyParser = require('body-parser');
// const DB=process.env.DATABASE;
// mongoose.connect(DB).then(()=>console.log("database connected")).catch((error)=>console.log('error'+error.message));


mongoose.connect('mongodb+srv://shumankr99:suman123456789@cluster0.6vjlkmr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));



