const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../controllers").User;

router.post("/doLogin", User.loginAction);

router.get("/getOneUser", User.getOneUser);

router.get("/getUserList", User.getUser);

router.post("/doReg", User.regUser);



module.exports = router;




