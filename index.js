const express = require('express');
const data = require('./data.json');
const path = require('path');

const app  = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('albums', data);
});

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
});