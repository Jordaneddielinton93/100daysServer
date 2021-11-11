let express = require("express");
const { getAllUserProfiles,insertIntoUserProfile} = require("../models/userProfiles");
let router = express.Router();


router.get("/profiles",async (req,res)=>{
  
  let listOfprofiles = await getAllUserProfiles()
  console.log(listOfprofiles)
  res.json(listOfprofiles)
  
})


router.put("/addprofile/:userInfo",async (req,res)=>{
  console.log("this route has been hit addprofile")
  console.log(req.params , "addprofile")
  // let {uid,name,email,}=req.params
  // let addUserProfile = await insertIntoUserProfile()
  
  
})

router.get("/",async(req,res)=>{
  res.send("this app is working on users before profile")
})


module.exports=router