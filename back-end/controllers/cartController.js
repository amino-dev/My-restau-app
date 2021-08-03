// const cartModel = require('../models/cartModel')

// module.exports = {
//    //get all 
//     getAll: async (req, res) => {
//         try {
//             const cart = await cartModel.find();
//             res.json(cart);
//         }
//         catch (error) {
//             console.error(error.message);
//             res.status(500).send("server error");
//           }
//     },
    
//     //add an item to cart
//     add: async (req, res) => {
//         const {product, quantity} = req.body;

//         try {
//           cart = new cartModel ({
//             _id :  product.id,
//             name: product.name,
//             price: product.price,
//             description : product.description,
//             img: product.img,
//             quantity
//           })
//           await cart.save();
//           res.json(cart);
//         } catch (error) {
//           console.error(error.message);
//           res.status(500).send("server error");
//         }
//     },
//     //delete an item
//     delete: async (req,res)=>{
//         try {
//           const cart = await cartModel.findByIdAndDelete(req.params.id)
//           res.json(cart)
//         }
//         catch (error) {
//          console.error(error.message);
//          res.status(500).send("server error")
//        }
//     },
//     //update an item
//     update: async (req,res)=>{
//         try {
//           const ocart = await cartModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
//             res.json(cart)
//         }
//         catch (error) {
//           console.error(error.message);
//           res.status(500).send("server error")
//         }
//       }
//     }   