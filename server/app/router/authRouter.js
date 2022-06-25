//imports
const router = require("express").Router()

//import controllers
const {register, login} = require("../controller/authController")




//////////////////////////
//
//        Router
//       (authMe)
//////////////////////////


// login
router.get("/login", (req, res, next) => {

})

router.post("/login", login)




// register


router.post("/register", register)

// logout
router.post("/logout", (req, res, next) => {
    res.send('asd')
})

module.exports = router