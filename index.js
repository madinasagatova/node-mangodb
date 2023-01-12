const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

var app =express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) =>{
    res.send(`
        <h2>Welcome to Student Database!</h2>
        <h3>Click here to get access to the<b> <a href="/student/list">Database</a></b></h3>
    `)

})

app.listen(3000, () =>{
    console.log('Server started at port 3000');
});