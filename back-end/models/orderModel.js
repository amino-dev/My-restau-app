const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
    
    tel: {
        type : String,
        required: true
    },
    adress: {
        type : String,
        required: true
    },
    status: {
        type : String,
        default: "not-confirmed",
        enum: ["not-confirmed", "confirmed"]
    }
  },
   {timestamps :true}
)

module.exports = order  = mongoose.model('order', orderSchema)