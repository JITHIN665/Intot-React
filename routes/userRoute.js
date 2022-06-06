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



module.exports = router;
