const express=require('express');
const app = express();
const router=express.Router();

router.get('/',(req,res)=>{
    console.log('user list fetched');
    res.status(200);
    res.send('Fetching users after nodemon');
},(err)=>{
    res.status(500);
    res.send('Error fetching userList',err);
}); //users api

router.post('/',(req,res)=>{
    console.log('user is posted!');
    res.send('User has been added!')
}) // users post api

router.put('/',(req,res)=>{
    console.log('user is added via put');
    res.send('User has been added via put')
})

module.exports = router;