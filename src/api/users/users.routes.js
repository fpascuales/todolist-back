const { signUp, login } = require("./users.controller");

const usersRoutes = require("express").Router();
usersRoutes.post("/", signUp);
usersRoutes.post("/login", login);

module.exports = usersRoutes;