const express=require('express');
const app = express();
const router=express.Router();
const userModel = require('./models');

router.get('/get_users/:name',async (req,res)=>{
    const user =await userModel.find({"name":req.params.name});

    res.send(user);
});


router.post('/add_user',async (req,res)=>{
    const user = new userModel(req.body);
    console.log('user is',user);
    try {
      await user.save(); //asynchronous
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;