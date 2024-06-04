require('dotenv').config();
const express = require('express');
const router = new express.Router();
// const Products = require('../models/productSchema');
const USER = require('../model/userSchema.js');
const bcrypt=require('bcryptjs');
const cookie=require('cookie-parser');
const authenticate =require( '../middleware/authenticate');
const crypto=require("crypto") ;





// const express=require('express');

// const mongoose=require('mongoose');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// const conn=require('./db/conn');
// const port=process.env.PORT ||5000;
// const USER = require('./model/userSchema.js');
// //  const Defaultdata=require('./defaultdata');
// // const Products=require('./model/userSchema.js');
// const cors=require('cors');
// // const router=require('./Routes/routes.js');
// // const cookieParser=require('cookie-parser');
// // const Razorpay=require("razorpay") ;
// // app.use(express.json()); //whatever data export to frontend is in form of json
// // app.use(cookieParser(""));
// app.use(cors());
// // app.use(router);





router.post("/signup", async (req, res) => {


    const { name,
      email,
      mobile_no
      } = req.body;
         
      if(!name||
      !email||
      !mobile_no
    ){
        res.status(422).json({error:"fill all data"});
      }
  
    try {
  
          const findPreUser=await USER.findOne({email:email});
  
          if(findPreUser){
            res.status(422).json({error:"email is already present"});
            console.log("email is already available");
          }else if(password!=confirm_password){
            res.status(422).json({error:"password is not matching"});
            console.log("password is not matching");
          }else{
            const finalUserData= new USER({
              name,
              email,
              mobile_no,
             
            });
               const storeData=await finalUserData.save();
               console.log("data is stored");
               res.status(201).json(storeData);
               console.log(json(storeData));
          }
  
    } catch (error) {
       console.log("error"+error.message);
    }
  });





  router.post("/login",async(req,res)=>{

    const { email,mobile_no } = req.body;
    if(!email|| !mobile_no){
        res.status(422).json({error:"fill all data"});
      }
    try{
        const userlogin=await USER.findOne({email:email});
        if(userlogin){
          const isMatch= await bcrypt.compare(mobile_no,userlogin.mobile_no);
          
          const token=await userlogin.generateAuthTokens();
           console.log(token);
          res.cookie("Neighbourkart", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        });
  
        if(!isMatch){
          res.status(400).json({error:"invalid detail"});
        }else{
          res.status(201).json(userlogin);
        }
      }else{
        res.status(415).json({error:"please signup first"});
      }
  
    }catch(error){
      res.status(400).json({error:"invalid detail"});
    }
  });




  module.exports = router;