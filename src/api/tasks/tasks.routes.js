const isAuth = require("../../middlewares/auth");
const { createTask, getAllTasks, updateTask, deleteTask, getTaskById } = require("./tasks.controller");

const tasksRoutes = require("express").Router();
tasksRoutes.post("/", [isAuth], createTask);
tasksRoutes.get("/", getAllTasks);
tasksRoutes.get("/:idTask", getTaskById);
tasksRoutes.put("/:idTask", [isAuth], updateTask);
tasksRoutes.delete("/:idTask", [isAuth], deleteTask);

module.exports = tasksRoutes;