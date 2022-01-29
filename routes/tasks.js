const express = require('express');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('List All tasks');
// });

// router.route('/').get((req, res) => {
//   res.send('List All Tasks');
// });

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask);

module.exports = router;
