const path=require('path');
const User=require('../models/models');
const { error } = require('console');

exports.signup= async (req,res)=>{
    res.sendFile(path.join(__dirname, '../','views','index.html'))
};

exports.post=async(req,res)=>{
    try{
        let {name,email,password}=req.body;
        if(isStiringVaild(name) || isStiringVaild(email) || isStiringVaild(password)){
            return res.status(400).json({err:"Bad parameter somthing is missing"})
        }
        const data=await User.create({name, email, password});
        res.status(201).json({message: "Succesfully created new user"})
    }catch(err){
      res.status(500).json({err:err})
    }
}

function isStiringVaild(str){
    if(str.length===0 || str==undefined){
        return true;
    }else{
        return false;
    }
}