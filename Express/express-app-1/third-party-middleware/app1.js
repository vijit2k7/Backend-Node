var express = require('express');

// Initializing the express and port number
var app = express();
app.use(express.urlencoded());
var PORT = 3000;

// Without using the json middleware



// Reading content-type
app.post('/', function (req, res) {
    console.log('req body is',req.body)
   res.end(req.body.name);
})

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});