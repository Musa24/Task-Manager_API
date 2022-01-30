const Task = require('../models/Tasks');

// GET /api/v1/tasks  -- get all tasks
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.json({ tasks });
  } catch (error) {
    res.status(500).send({ error });
  }
};

//GET /api/v1/tasks/:id -- get a specifi task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send({ msg: `No task found with id ${id}` });
    }
    res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//POST = /api/v1/tasks   -- create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PATCH = /api/v1/tasks/:id -- update a field of task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedTask) {
      return res.status(404).send({ msg: `No task found with id ${id}` });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//DELETE = /api/v1/tasks/:id -- delete a field of task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Task.findByIdAndDelete(id);
    if (!del) {
      return res.status(404).send({ msg: `No task found with id ${id}` });
    }
    // res.status(200).json({
    //   message: 'Delete successfully',
    // });
    res.json({ task: null, status: 'success' });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const notFound = (req, res) => {
  res.status(404).json({ msg: 'Page Not Found' });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  notFound,
};
