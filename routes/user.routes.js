const express = require('express')

const router = express.Router()

const controller = require('../controllers/user.controller')

router.get('/all', controller.getAll)
router.get('/:id' , controller.getById)
router.put('/:id', controller.update)
router.delete('/:id' , controller.delete)
router.post('/new' , controller.create)

module.exports = router