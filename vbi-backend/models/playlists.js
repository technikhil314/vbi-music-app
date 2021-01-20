const { DataTypes } = require("sequelize");
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

async function create() {
    return model.create();
}

async function getAll(userId) {
    return await model.findAll({

    });
}

module.exports = { getAllPlaylists: getAll, createPlaylist: create, playlist: model };
