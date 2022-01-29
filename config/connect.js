const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/taskManagerDB');
  console.log('The database is connected');
};

module.exports = connectDB;
