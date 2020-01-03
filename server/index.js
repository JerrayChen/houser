require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT, DB_STRING } = process.env;

const controller = require('./controller');

// middleware
app.use(express.json());

massive(DB_STRING).then(db=>{
    app.set('db',db);
    console.log('Database connected!');    
});

// endpoints
app.get('/api/house',controller.getHouses);
app.post('/api/house',controller.addHouse);
app.delete('/api/house/:id', controller.deleteHouse);

// listening
app.listen(SERVER_PORT, ()=>console.log('Server is listening to port', SERVER_PORT));
