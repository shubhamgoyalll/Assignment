const express = require("express");
const admin = require("../controllers/admin-controller");
const homeController = require("../controllers/index");
const router = express.Router();

router.use(express.urlencoded());

router.get("/", homeController.home);
router.post("/check-user", admin.checkUser);
router.get("/admin", admin.adminPage);
router.post("/create-user", admin.create);
router.get("/delete-user", admin.delete);
router.get("/update-user", admin.updatePage);
router.post("/updated", admin.update);
module.exports = router;
