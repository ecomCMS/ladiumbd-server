const express = require("express");
const user = require("../../controllers/user.controllers");
const router = express.Router();

router.route("/login").post(user.getUser);
router.route("/register").post(user.createUser);
router.route("/:email").patch(user.updateUser).delete(user.deleteUser);

module.exports = router;
