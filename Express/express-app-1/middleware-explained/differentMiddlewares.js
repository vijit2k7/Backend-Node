//1. Application Middleware
// const express = require('express');
// const app = express();
// const router = express.Router();

// router.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

// router.get('/home', (req,res) => {
//   res.send("ok")
// });

// app.use('/', router);
// app.listen(process.env.port || 3000);

// console.log('Web Server is listening at port '+ (process.env.port || 3000));

//Third party Middlewares

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();


router.get('/home', (req,res) => {
  const obj={
      name:'Vijit'
  }
  res.send(obj);
});

router.get('/profile', (req,res) => {
  res.send('Hello World, This is profile router');
});

router.get('/login', (req,res) => {
  res.send('Hello World, This is login router');
});

router.get('/logout', (req,res) => {
  res.send('Hello World, This is logout router');
});

// add middleware before routes



app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));