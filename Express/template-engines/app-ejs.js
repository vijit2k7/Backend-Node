const express = require("express")
const app = express();
// Set the View Engine or Template Engine
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('view',{names:'Vijit',list:[1,2,3]});
})

app.listen(3000)