const express = require('express');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  notFound,
} = require('../controllers/tasks');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('List All tasks');
// });

// router.route('/').get((req, res) => {
//   res.send('List All Tasks');
// });

// app.all('*', (req, res, next) => {
//   next(new ExpressError('Page Not Found', 404));
// });

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
// router.route('*').all(notFound);

module.exports = router;
