const express = require('express'); 
const router = express.Router(); 

import AnaSofhiaRoutes from "./routesAnaSofhia"

router.use("/", AnaSofhiaRoutes)

module.exports = router;