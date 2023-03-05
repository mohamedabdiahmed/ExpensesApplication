const Express = require("express");
const router = Express.Router();
const userControllers = require("../Controllers/userController.js");
router.get("/", userControllers.getAllUsers);

module.exports = router;
