
// Code1
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});
app.listen(3000);


// Code2
const express = require('express');
const app = express()

app.get('/', (req,res) =>{
        res.send('Hello World 1234');
});

app.get('/api/cources',(req,res) =>{
    res.send([1,2,3])
})

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`Port is ${port}`))


// Code3 routing
var express = require('express');
var app = express();

var router1 = require('./router.js');

//both index.js and things.js should be in same directory
app.use('/router2', router1);

app.listen(3000);