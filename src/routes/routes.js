const express = require('express'); 
const router = express.Router(); 

const AnaSofhiaRoutes = require("./routesAnaSofhia");

router.use("/", AnaSofhiaRoutes)

module.exports = router;