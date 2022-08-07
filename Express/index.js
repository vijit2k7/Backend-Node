const express=require('express');
const app = express();
const port=3000;


const userList=[{name:'Vijit',id:1},{name:'Tejas',id:2}];
app.get('/',(req,res)=>{
    console.log('get api called');
    res.send('Hello user!')
});  //first api

app.get('/hotels/:id([0-9]{3})',(req,res)=>{
    console.log('request is',req.params);
    res.send('Hotel fetch api is called with hotel Number: '+req.params.id+req.params.name);
})

const userRouter=require('./routes/users');

app.use('/users', userRouter); //router

app.listen(port);
console.log('Server is running on port '+port);

