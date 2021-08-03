const orderModel = require('../models/orderModel')

module.exports = {
   //get all orders
    getAll: async (req, res) => {
        try {
            const order = await orderModel.find();
            res.json(order);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get an order
    getOrder: async (req, res) => {
        try {
           const order = await orderModel.findById(req.params.id)
           res.json(order)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //add an order
    add: async (req, res) => {
        const {tel,adress,status} = req.body;

        try {
          order = new orderModel ({
            tel, 
            adress, 
             status
            
          })
          await order.save();
          res.json(order);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    },
    //delete an order
    delete: async (req,res)=>{
        try {
          const order = await orderModel.findByIdAndDelete(req.params.id)
          res.json(order)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update an order
    update: async (req,res)=>{
        try {
          const order = await orderModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
            res.json(order)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   