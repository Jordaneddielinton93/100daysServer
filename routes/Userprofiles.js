let express = require("express");
const { getAllUserProfiles } = require("../models/getAllUserProfiles");
let router = express.Router();

router.get("/",async(req,res)=>{
  res.send("this app is working on users before profile")
})

router.get("/profiles",async (req,res)=>{

  let listOfprofiles = await getAllUserProfiles()

  res.json(listOfprofiles)
  
})

module.exports=router