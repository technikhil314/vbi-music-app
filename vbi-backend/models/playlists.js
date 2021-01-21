const { DataTypes } = require("sequelize");
const { song } = require("./songs");
const db = require("../startup/db");

const model = db.define(
    "playlist",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "Playlist",
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [{ unique: true, fields: ["id"] }],
    }
);
model.sync({ alter: true });

async function create(data, songs) {
    const [playlist, selectedSongs] = await Promise.all([
        model.create(data), song.findAll({
            where: {
                id: Array.isArray(songs) ? songs : [songs]
            }
        })
    ]);
    return Promise.all(selectedSongs.map(selectedSong => playlist.addSongs(selectedSong)));
}

async function getAll(userId) {
    return await model.findAll({
        where: {
            UserId: userId,
        },
        include: [song]
    })
}

async function getByPk(id) {
    return await model.findByPk(id, {
        include: [song]
    })
}

module.exports = { getAllPlaylists: getAll, createPlaylist: create, playlist: model, getPlaylistByPk: getByPk };
