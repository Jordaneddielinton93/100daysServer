let express = require("express");
let cors = require("cors");

let app = express()

app.use(express.json())
app.use(cors())

let users= require("./routes/Userprofiles")
app.use("/user",users)

app.use("/",(req,res)=>{
  res.send("hello im working")
})


module.exports=app