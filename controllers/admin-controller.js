const db = require("../config/mongoose");
const adminData = require("../models/admin");
const { param } = require("../routes");
const adminDetails = {
  username: "admin",
  password: "admin",
};
let x = 0;

module.exports.checkUser = (req, res, err) => {
  if (
    req.body.username == adminDetails.username &&
    req.body.password == adminDetails.password
  ) {
    x = 1;
    return res.redirect("/admin");
  } else {
    adminData.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        console.log("Error in finding user");
        return;
      }
      if (user) {
        if (user.password == req.body.password) {
          return res.render("user-page");
        } else {
          console.log("Wrong Password");
          return res.render("home-page");
        }
      } else {
        console.log("user does not exist");
        return res.render("home-page");
      }
    });
    return;
  }
};

module.exports.adminPage = (req, res) => {
  if (x == 1) {
    adminData.find({}, function (err, user) {
      if (err) {
        console.log("Error in fetching contacts from db");
        return;
      }

      return res.render("admin-page", {
        user_list: user,
      });
    });
  }
};

module.exports.create = function (req, res) {
  adminData.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing Up");
      return;
    }

    if (!user) {
      adminData.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating user while signing Up", err);
          return;
        }

        return res.redirect("back");
      });
    } else {
      return res.render("home-page");
    }
  });
};

module.exports.updatePage = function (req, res) {
  
  return res.render("user-updation-page");
};
module.exports.update = function (req, res) {
  username = req.query.username;
  console.log(username);
  adminData.findByIdAndUpdate(username, (err, user) => {
    if (err) {
      console.log(err);
      return redirect("home-page");
    } else {
      user.username = req.body.username;
      user.password = req.body.password;
      console.log(user);
      return res.redirect("/admin");
    }
  });
};

module.exports.delete = function (req, res) {
  username = req.query.username;
  adminData.findOneAndDelete(username, (err) => {
    if (err) {
      console.log("User does not exist");
      return;
    }
    return res.redirect("back");
  });
};
