const mongoose = require("mongoose");
//creating database
mongoose.connect("mongodb://localhost/adminDB");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Could not connect"));
db.once("open", function () {
  console.log("Database is connected");
});
