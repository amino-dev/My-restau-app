const router = require("express").Router();
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../controllers/userController");

const user = require('../controllers/userController')
// Users Registeration Route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});