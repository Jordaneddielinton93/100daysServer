const pool = require("../index");
let listL={
  name:"jordan",
  email:"jordy1234@thatcound",
  pixelimg:"35455445gfvvbfgbfgb.jpg",
  hasPosted:true,
  tot_post:54,
  tot_consist:30
}

async function populateUserProfile(){

  await pool.query(
    `INSERT INTO userprofiletable (
      name,
      email,
      pixel_img,
      hasPostedToday,
      tot_days_posted,
      tot_days_consistent,
      list_of_dates_posted
    ) VALUES($1,$2,$3,$4,$5,$6,$7)`,
    [listL.name,listL.email,listL.pixelimg,listL.hasPosted,listL.tot_post,listL.tot_consist,[5,3,43,3,6,7]]
  )

  console.log("user profile has been populated")
}

populateUserProfile()