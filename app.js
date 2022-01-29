const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./config/connect');
const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

app.use('/api/v1/tasks', tasks);

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`The server is listening on port ${PORT}`);
});
