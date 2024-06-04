require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const bcrypt=require('bcryptjs');
const conn=require('./db/conn');
const port=2016;
const USER = require('./model/userSchema.js');
//  const Defaultdata=require('./defaultdata');
// const Products=require('./model/userSchema.js');
const cors=require('cors');
// const router=require('./Routes/routes.js');
const cookieParser=require('cookie-parser');
// const Razorpay=require("razorpay") ;
// app.use(express.json()); //whatever data export to frontend is in form of json
app.use(cookieParser(""));
app.use(cors());
// app.use(router);
const path = require('path');
app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./client/build/index.html"),
      function (err) {
        res.status(500).send(err);
      }
    );
  });


// app.get("/login", function(req,res){
//     res.sendFile("client\src\components\Sign\signIn.jsx",{root:__dirname});
// })





app.post("/signup", async (req, res) => {


  const { name,
    email,
    mobile_no,
    password,
    confirm_password } = req.body;
       
    if(!name || 
    !email || 
    !mobile_no || 
   ! password ||
    !confirm_password){
     return res.status(422).json({error:"fill all data"});
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
            password,
            confirm_password
           
          });
             const storeData=await finalUserData.save();
             console.log("data is stored");
            return res.status(201).json(storeData);
        }

  } catch (error) {
     console.log("error"+error.message);
  }
});










// app.post("/signup", async (req, res) => {
//   const { name, email, mobile_no, password } = req.body;

//   try {
//     // Check if all required fields are provided
//     if (!name || !email || !mobile_no || !password) {
//       return res.status(422).json({ error: "Please fill all fields" });
//     }

//     // Check if the email is already registered
//     const existingUser = await USER.findOne({ email: email });
//     if (existingUser) {
//       return res.status(422).json({ error: "Email is already registered" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Create a new user instance
//     const newUser = new USER({
//       name,
//       email,
//       mobile_no,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Respond with success message
//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error:", error.message);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });







//   app.post("/login",async(req,res)=>{

//     const { email,mobile_no } = req.body;
//     if(!email|| !mobile_no){
//         res.status(422).json({error:"fill all data"});
//       }
//     try{
//         const userlogin=await USER.findOne({email:email});
//         if(userlogin){
//           const isMatch= await bcrypt.compare(mobile_no,userlogin.mobile_no);
          
//           const token=await userlogin.generateAuthTokens();
//            console.log(token);
//           res.cookie("Neighbourkart", token, {
//             expires: new Date(Date.now() + 25892000000),
//             httpOnly:true
//         });
  
//         if(!isMatch){
//           res.status(400).json({error:"invalid detail"});
//         }else{
//           res.status(201).json(userlogin);
//         }
//       }else{
//         res.status(415).json({error:"please signup first"});
//       }
  
//     }catch(error){
//       res.status(400).json({error:"invalid detail"});
//     }
//   });





// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
    
//     if (!email || !password) {
//         return res.status(422).json({ error: "Please fill all data" });
//     }

//     try {
//         const userLogin = await USER.findOne({ email: email });
        
//         if (!userLogin) {
//             return res.status(415).json({ error: "Please sign up first" });
//         }

//         // Assuming mobile_no is hashed in the database
//         const isMatch = await bcrypt.compare(password, userLogin.password);

//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid details" });
//         }
 
        
//         // Generate authentication token
//         const token = await userLogin.generateAuthTokens();
//         console.log(token);

//         // Set cookie with token
//         res.cookie("Neighbourkart", token, {
//             expires: new Date(Date.now() + 25892000000), // Set cookie expiry
//             httpOnly: true // Prevent client-side access to cookie
//         });

//         // Return user data
//         // res.status(200).json(userLogin);
//        return res.redirect("/");
        
//     }catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
  
// });




app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
      return res.status(422).json({ error: "Please fill all data" });
  }

  try {
      const userLogin = await USER.findOne({ email: email });
      
      if (!userLogin) {
          return res.status(415).json({ error: "Please sign up first" });
      }

      // Assuming mobile_no is hashed in the database
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
          return res.status(400).json({ error: "Invalid details" });
      }

      // Generate authentication token
      const token = await userLogin.generateAuthTokens();
      // console.log(token);

      // Set cookie with token
      res.cookie("Neighbourkart", token, {
          expires: new Date(Date.now() + 25892000000), // Set cookie expiry
          httpOnly: true // Prevent client-side access to cookie
      });

    
      app.get("/login", function(req,res){
        res.status(200).send('Successfully logged in');
      })

     
      
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
  }
});










app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

// Defaultdata();