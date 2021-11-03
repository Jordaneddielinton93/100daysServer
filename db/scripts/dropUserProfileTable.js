const pool = require("../index");

async function dropUserProfileTable(){
  await pool.query(
    `DROP TABLE userprofiletable`)
  console.log("user profile was dropped from database")
}

dropUserProfileTable()