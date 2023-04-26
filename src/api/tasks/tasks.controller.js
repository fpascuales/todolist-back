const Task = require("./tasks.model");

const createTask = async (req, res, next) => {
    try {
        req.body.category = "Pendiente";
        const newTask = await new Task(req.body)
        await newTask.save();
        return res.json(newTask);
    } catch (error) {
        return next(error);
    }
}
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        return res.json(tasks);
    } catch (error) {
        return next(error);
    }
}
const updateTask = async (req, res, next) => {
    try {
        const { idTask } = req.params;
        const taskUpdated = await Task.findByIdAndUpdate(idTask, req.body, {new:true});
        return res.status(202).json(taskUpdated);
    } catch (error) {
        return next(error);
    }
}
const deleteTask = async (req, res, next) => {
    try {
        const { idTask } = req.params;
        const taskDeleted = await Task.findByIdAndDelete(idTask);
        return res.status(202).json(taskDeleted);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
}