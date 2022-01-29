const express = require('express');
const { getAllTasks } = require('../controllers/tasks');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('List All tasks');
// });

// router.route('/').get((req, res) => {
//   res.send('List All Tasks');
// });

router.route('/').get(getAllTasks);

module.exports = router;
