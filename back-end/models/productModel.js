
const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    img: {
        type : String,
        // data: Buffer,
        required: true
    }
},
 {timestamps :true}
)

module.exports = product  = mongoose.model('product', productSchema)