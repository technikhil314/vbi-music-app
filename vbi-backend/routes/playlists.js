let express = require('express');
let router = express.Router();
const { getAllPlaylists, createPlaylist, getPlaylistByPk } = require("../models/playlists");
const auth = require("../middlewares/auth");
const checkUserInDB = require("../middlewares/checkUserInDB");

router.post('/create', auth, checkUserInDB, async function (req, res) {
    await createPlaylist({
        title: req.body.name,
        UserId: req.user.sub
    },
        req.body.songs,
    )
    res.status(201).send();
});

router.get('/all', auth, checkUserInDB, async function (req, res) {
    const all = await getAllPlaylists(req.user.sub);
    res.send(JSON.stringify(all, null, 2));
});

router.get('/:id', auth, checkUserInDB, async function (req, res) {
    const playlist = await getPlaylistByPk(req.params.id);
    res.send(JSON.stringify(playlist, null, 2));
});

module.exports = router;
