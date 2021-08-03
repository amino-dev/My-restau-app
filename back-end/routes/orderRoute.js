const express = require('express')
const router = express.Router()
const order = require('../controllers/orderController')

//Routes
router.get('/getAll',order.getAll)
router.get('/get/:id',order.getOrder)
router.post('/add',order.add)
router.delete('/delete/:id',order.delete)
router.put('/update/:id',order.update)

module.exports = router