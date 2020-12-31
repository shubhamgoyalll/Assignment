const express = require("express");
const ejs = require("ejs");

const port = 8000;
const router = require("./routes/index");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", router);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error!:${err}`);
    return;
  }
  console.log(`Server is up and running on port: ${port}`);
});
