const {Router} = require('express')
const {getAllTodo, addTodo , updateToDo ,deleteToDo} = require('../controllers/todoControllers')
const router = Router()

router.get('/',getAllTodo)

router.post('/add',addTodo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

module.exports = router