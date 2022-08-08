const express = require('express')
const app = express();
console.log('App started');
app.use((req,res,next)=>{
    console.log('logging started');
    next();
});

app.get('/',(req,res)=>{
    res.send('Welcome user!')
});

app.get('/home',(req,res)=>{
    console.log('Homepage')
    res.send('Homepage called');
});


app.get('/users',(req,res)=>{
    console.log('Users')
    res.send('Users page called');
});


app.listen(3000);



/*1. Middleware order is important
2. app.use() is used to create a middleware
3. middleware resides in req,res lifecycle ---> next() avoid infinite loop
*/
