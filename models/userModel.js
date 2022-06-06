const mongoose = require('mongoose');


const usersSchema = {
  firstname: String,
  email: String,
  mobile: String,
  password: String,
  message: String,
}

const User = mongoose.model("User", usersSchema);

module.exports = User;
