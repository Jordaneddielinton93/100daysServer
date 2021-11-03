// require('dotenv').config()
let {Pool}=require("pg")


const pool= new Pool({
  // host: process.env.DB_HOST,
  // database:process.env.DB_DATABASE,
  // user:process.env.DB_USER,
  // port: process.env.DB_PORT,
  // password:process.env.DB_PASSWORD,
  connectionString:process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  })

module.exports=pool