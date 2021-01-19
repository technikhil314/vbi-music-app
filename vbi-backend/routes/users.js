
let express = require('express');
const auth = require("../middlewares/auth");
let router = express.Router();
const { create: createUser } = require("../models/users");
/* GET users listing. */
router.get('/', auth, function (req, res, next) {
  createUser();
  res.send(JSON.stringify({
    message: "Some response data"
  }));
});

module.exports = router;
