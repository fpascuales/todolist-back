require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const tasksRoutes = require("./src/api/tasks/tasks.routes.js");
const usersRoutes = require("./src/api/users/users.routes.js");

server.use("/tasks", tasksRoutes);
server.use("/users", usersRoutes);

const db = require("./src/utils/db.js");
db.connectDB();

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error")
})
server.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})
server.use("/", (req, res) => {
    res.send("It Works!")
})
server.listen(PORT, () => {
    console.log("Server is running!");
})