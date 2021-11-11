let express = require("express");
let cors = require("cors");

let app = express()

app.use(express.json())
app.use(cors({
  origin:'*',
  credentials:true
}))


require("dotenv").config()



// index.js

const { auth } = require('express-openid-connect');
app.use(
  auth({
    authRequired:false,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);






let users= require("./routes/Userprofiles")

app.use("/user",users)

app.use("/",(req,res)=>{
  res.send("hello immmm working")
})


module.exports=app