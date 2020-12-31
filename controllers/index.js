const express = require("express");

module.exports.home = (req, res) => {
  return res.render("home-page");
};
