//imports
const router = require("express").Router()

//import controllers






//////////////////////////
//
//        Router
//       (static)
//////////////////////////

//
router.get(["/", "", "index"], (req, res, next) => {
    res.send("index.page");
});
router.get("about", (req,res,next) =>{
    res.send("about")
})






//
//Export router
//
module.exports = router;