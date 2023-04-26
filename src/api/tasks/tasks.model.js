const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
       name: {type: String, required: true, trim: true},
       category: {type: String, enum: ['Activa', 'Pausada', 'Completada', 'Pendiente']},
       dueDate: {type: Date, required: true}
    },
    {
        timestamps: true,
        collection: 'tasks'
    }
)
const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;