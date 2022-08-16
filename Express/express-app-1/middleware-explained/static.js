const express = require('express')
const app = express()

app.use(express.static('../public'))

app.get('/',(req,res)=>{
    res.send('Controller');
})

app.listen(3000);
console.log('Server started on 3000');