const pool = require("../index");

async function createUserProfileTable(){
  await pool.query(
    `CREATE TABLE IF NOT EXISTS userprofiletable(
      uid SERIAL PRIMARY KEY,
      name VARCHAR(20),
      email VARCHAR(50),
      pixel_img VARCHAR(500),
      hasPostedToday BOOLEAN,
      tot_days_posted INT,
      tot_days_consistent INT,
      list_of_dates_posted integer[]
    )
  `)
  console.log("user profile has been created")
}

createUserProfileTable()