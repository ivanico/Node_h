const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
require('dotenv').config();
const mongoose = require ('mongoose');
const port = 3001;
const routes =require('./src/routes');
const bodyParser =require('body-parser');


server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

routes(server);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-j520k.mongodb.net/test?retryWrites=true&w=majority`,
{useNewUrlParser:true,useUnifiedTopology:true});

const db =mongoose.connection;
db.on('error', () => {console.log('error connection'+ error)});
db.once('open',() => {
    console.log('Successfully connected to MDB')
    server.listen(port,() => {
        console.log(`Server started on port ${port}, hi!`)
    });
})