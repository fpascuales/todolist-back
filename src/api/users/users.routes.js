const { signUp, login, getAllUsers, getUsersById } = require("./users.controller");

const usersRoutes = require("express").Router();
usersRoutes.post("/", signUp);
usersRoutes.post("/login", login);
usersRoutes.get("/", getAllUsers);
usersRoutes.get("/:idUser", getUsersById);
module.exports = usersRoutes;