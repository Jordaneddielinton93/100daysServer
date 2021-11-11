const pool = require("../db/index");

async function getAllUserProfiles(){
  let allUsers= await pool.query(`SELECT * FROM userprofiletable`)
  console.log("gotten All user profiles") 
  return allUsers.rows
 
}

async function insertIntoUserProfile(uid,name,email,img,hasposted,tot_posted,tot_consistent){
  let insertUserInfo = await pool(`insert into userprofiletable VALUES($1,$2,$3,$4,$5,$6,$7)`,[uid,name,email,img,hasposted,tot_posted,tot_consistent])
  return insertUserInfo

}

module.exports={
  getAllUserProfiles,
  insertIntoUserProfile
}