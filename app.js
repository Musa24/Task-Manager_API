const express = require('express');
const tasks = require('./routes/tasks');
const app = express();

app.use('/api/v1/tasks', tasks);

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`The server is listening on port ${PORT}`);
});
