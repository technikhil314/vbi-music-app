
let express = require('express');
// const auth = require("../middlewares/auth");
let router = express.Router();
const { artist } = require("../models/artists");
const { album } = require("../models/albums");
const { getAllSongs } = require("../models/songs");
router.post('/create', async function (req, res, next) {
  const allSongs = await getAllSongs({
    include: [album]
  });
  res.send(JSON.stringify(allSongs));
});
router.get('/all', async function (req, res, next) {
  const allSongs = await getAllSongs({
    include: [album, artist]
  });
  res.send(JSON.stringify(allSongs));
});

module.exports = router;
