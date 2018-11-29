const router = require("express").Router();
const employee = require("./employee");

// Book routes
router.use("/employee", employee);

module.exports = router;
