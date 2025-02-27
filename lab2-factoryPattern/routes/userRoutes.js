const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { CREATE_USER, GET_USERS } = require("../consts/index");

router.post(CREATE_USER, userController.createUser);
router.get(GET_USERS, userController.getUsers);

module.exports = router;
