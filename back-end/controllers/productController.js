const productModel = require('../models/productModel')
// const fs = require('fs')
// const path = require('path')
module.exports = {
   //get all products
    getAll: async (req, res) => {
        try {
            const product = await productModel.find();
            res.json(product);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //get a product
    getProduct: async (req, res) => {
        try {
           const product = await productModel.findById(req.params.id)
           res.json(product)
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
    },
    //add a product
    add: async (req, res) => {
      const {name, img, price, description} = req.body;

      try {
            product = new productModel ({
              name,
              img, 
              price, 
              description
            })
        // product = new productModel ({
        //   name : req.body.name,
        //   price : req.body.price,
        //   description : req.body.description,
        //   img : {
        //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        //     contentType: 'image/png'
        // }
        // })
        // if(req.file) {
        //   product.avatar = req.file.path
        // }
        await product.save();
        res.json(product);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
  },
    //delete a product
    delete: async (req,res)=>{
        try {
          const product = await productModel.findByIdAndDelete(req.params.id)
          res.json(product)
        }
        catch (error) {
         console.error(error.message);
         res.status(500).send("server error")
       }
    },
    //update a product
    update: async (req,res)=>{
        try {
          const product = await productModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
            res.json(product)
        }
        catch (error) {
          console.error(error.message);
          res.status(500).send("server error")
        }
      }
    }   
