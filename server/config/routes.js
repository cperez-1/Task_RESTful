const task = require('../controllers/task')
const {Router} = require('express')

const router = Router();

router.get('/tasks', task.index)
router.get('/task/detail/:id', task.detailTask)
router.post('/task/add', task.addTask)
router.post('/task/delete', task.deleteTask)
router.post('/task/edit', task.editTask)

module.exports = router