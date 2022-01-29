const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  complete: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
