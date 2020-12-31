const mongoose = require("mongoose");
//crating schema
const usersSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

const Admin = mongoose.model("Admin", usersSchema);
module.exports = Admin;
