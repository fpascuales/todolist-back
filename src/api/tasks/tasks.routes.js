const isAuth = require("../../middlewares/auth");
const { createTask, getAllTasks, updateTask, deleteTask } = require("./tasks.controller");

const tasksRoutes = require("express").Router();
tasksRoutes.post("/", [isAuth], createTask);
tasksRoutes.get("/", getAllTasks);
tasksRoutes.put("/:idTask", [isAuth], updateTask);
tasksRoutes.delete("/:idTask", [isAuth], deleteTask);

module.exports = tasksRoutes;