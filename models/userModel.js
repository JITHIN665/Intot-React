const mongoose = require('mongoose');


const usersSchema = {
  firstname: String,
  lastname: String,
  mobile: String,
  message: String,
}

const User = mongoose.model("User", usersSchema);

module.exports = User;
