var express = require('express');
var app = express();


//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
 //middleware
app.get('/', function(req, res, next){
    console.log('Middle called');
    next();
 }); 

 app.use('/', function(req, res,next){
    console.log('End');
    next();
 });

 app.use('/',function(req,res){
     res.send('Ending the lifecycle');
 })

app.listen(3000);