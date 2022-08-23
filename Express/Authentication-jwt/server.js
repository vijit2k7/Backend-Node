const express=require('express');
const app = express();
const jwt = require('jsonwebtoken');
const User = require('../MongoDb/models');

app.use(express.json());
const port=4000;

app.get('/api/testing', (req,res) => {
    res.send('Hello Developer!')
    });

app.post('/signup',(req,res)=>{
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    jwt.sign(password , 'secret_key' , (err,token) => {
        if(err){
            res.status(400).send({msg : 'Error Bad Request'})
        }
        else{
            res.send({msg:'Success!! Token generated!!' , token: token})
        }
    })
});

function verifyAuth(req,res,next){
    const token =req.headers['x-token'];
    if(!token) res.status(400).send('Token missing!!');
    jwt.verify(token, "secret_key", (err, user) => {
        console.log('err and user is',user,err);
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

app.post('/login',verifyAuth,(req,res)=>{
    res.send('Login successful!!')
})

app.listen(port,() => console.log('Server is Up and Running on '+port));