let express = require('express');
let router = express.Router();
const { getAllPlaylists } = require("../models/playlists");
const auth = require("../middlewares/auth");

router.get('/all', auth, async function (req, res) {
    console.log(req.user);
    const all = await getAllPlaylists(req.user.sub);
    res.send(JSON.stringify(all, null, 2));
});

module.exports = router;
