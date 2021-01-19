const { DataTypes } = require("sequelize");
const db = require("../startup/db");

const model = db.define(
    "artist",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        tableName: "Artist",
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

module.exports = { create };
