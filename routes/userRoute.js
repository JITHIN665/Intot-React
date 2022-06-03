const express = require("express");
const router = express.Router();
const User = require("../models/userModel");



router.route("/create").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mobile = req.body.mobile;
  const message = req.body.message;
  const newUser = new User({
    firstname,
    lastname,
    mobile,
    message,
  });
  newUser.save();
})


module.exports = router;
