const express=require('express');
const bodyParser=require('body-parser');
const controler=require('../controler/controler');
const router=express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get('/signup', controler.signup);
router.post('/post',controler.post)



module.exports=router;