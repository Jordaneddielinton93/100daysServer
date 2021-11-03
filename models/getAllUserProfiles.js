const pool = require("../db/index");

async function getAllUserProfiles(){
  let allUsers= await pool.query(`SELECT * FROM userprofiletable`)
  console.log("gotten All user profiles") 
  return allUsers.rows
 
}

module.exports={
  getAllUserProfiles
}