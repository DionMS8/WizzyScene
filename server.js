// IMPORTING THE EXPRESS FRAMEWORK
const express = require("express");
// CREATING AN EXPRESS APP
const app = express();

// LOADING AN HTTP SERVER
const server = require('http').Server(app);

// IMPORTING THE UUID LIBRARY
const { v4: uuidv4 } = require('uuid');

// SETTING THE EJS VIEW ENGINE
app.set('view engine', 'ejs');


// CREATING EXPRESS ROUTES

// ROUTE FOR THE ROOT PATH
app.get('/', (req, res) => {
    // res.status(200).send("Hello World");
    res.redirect(`/${uuidv4()}`);
})

// CREATING A URL TO INCLUDE THE ROOM UUID
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})


// SETTING THE SERVER TO LISTEN ON LOCALHOST PORT 3030
server.listen(3030);

// NOTE: HTTP STATUS CODE: 200 (OK) MEANS 
// THAT THE REQUEST WAS RECEIVED, UNDERSTOOD, 
// AND IS BEING PROCESSED




