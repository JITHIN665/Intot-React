const express = require("express");
const router = express.Router();
const User = require("../models/userModel");



router.route("/create").post((req, res) => {
  const firstname = req.body.firstname;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.password;
  const message = req.body.message;
  const newUser = new User({
    firstname,
    email,
    mobile,
    password,
    message,
  });
  newUser.save();
})

// router.route("/login").post(async(req,res) =>{
//   const data = await User.find({});
//  console.log(data);
//  res.json({data})
// });
// Only Single Data//////
router.route("/login").post(async(req,res) =>{
  const email =req.body.email;
  const password =req.body.password;
 const data=await User.findOne({email,password});
 console.log(data);
 res.json({data})
});


module.exports = router;
