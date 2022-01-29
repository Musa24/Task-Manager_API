const Task = require('../models/Tasks');

// GET /api/v1/tasks  -- get all tasks
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
};

//POST = /api/v1/tasks   -- create a new task
const createTask = async (req, res) => {
  const task = new Task(req.body);
  const newTask = await task.save();
  res.status(201).json(newTask);
};

// PATCH = /api/v1/tasks/:id -- update a field of task
// ID - 61f50398393503f7fbd3c058
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    {
      complete,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(updatedTask);
};

//DELETE = /api/v1/tasks/:id -- delete a field of task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({
    message: 'Delete successfully',
  });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
