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
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
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
    const [playlist, songs] = Promise.all([
        model.create(data), song.findAll({
            where: {
                id: Array.isArray(songs) ? songs : [songs]
            }
        })
    ]);
    songs.forEach(selectedSong => playlist.addSongs(selectedSong));
}

async function getAll(userId) {
    return await model.findAll({
        where: {
            UserId: userId,
        }
    })
}

module.exports = { getAllPlaylists: getAll, createPlaylist: create, playlist: model };
