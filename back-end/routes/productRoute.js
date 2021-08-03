const express = require('express')
const router = express.Router()
const product = require('../controllers/productController')
// const upload = require('../middlewares/upload')

//Routes
router.post('/add',product.add) //upload.single('img')
router.get('/getAll',product.getAll)
router.get('/get/:id',product.getProduct)
router.delete('/delete/:id',product.delete)
router.put('/update/:id',product.update)


module.exports = router