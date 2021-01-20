
let express = require('express');
// const auth = require("../middlewares/auth");
let router = express.Router();
const { artist } = require("../models/artists");
const { album } = require("../models/albums");
const { getAllSongs, createSong } = require("../models/songs");

router.get('/all', async function (req, res, next) {
  const allSongs = await getAllSongs();
  console.log(JSON.stringify(allSongs, null, 2));
  res.send(JSON.stringify(allSongs, null, 2));
});

module.exports = router;
