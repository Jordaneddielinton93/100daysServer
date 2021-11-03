let express = require("express");
const { getAllUserProfiles } = require("../models/getAllUserProfiles");
let router = express.Router();


router.get("/profiles",async (req,res)=>{
  
  let listOfprofiles = await getAllUserProfiles()
  console.log(listOfprofiles)
  res.json(listOfprofiles)
  
})

router.get("/",async(req,res)=>{
  res.send("this app is working on users before profile")
})


module.exports=router