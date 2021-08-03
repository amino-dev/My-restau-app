const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");


// Bring in the app constants
const { PORT } = require("./config/config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(passport.initialize());
app.use('/uploads', exp.static('uploads'))

require("./middlewares/passport")(passport);


// Importing routes
const User = require("./routes/userRoute")
// const Cart = require("./routes/cartRoute")
const Order = require("./routes/orderRoute")
const Product = require("./routes/productRoute")


// User Router Middleware
app.use('/restauApp/user',User)
// app.use('/restauApp/cart',Cart)
app.use('/restauApp/order',Order)
app.use('/restauApp/product',Product)

// import database
const db = require('./config/db')
db()


// connexion server
app.listen(PORT, (err)=> {
    if (err) {
        console.log("Error when running the server")
    } else {
        console.log(`Server listening on port ${PORT}!`)
    }
})
