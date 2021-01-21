const { DataTypes } = require("sequelize");
const db = require("../startup/db");

const model = db.define(
    "user",
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "User",
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [{ unique: true, fields: ["id"] }],
    }
);
model.sync({ alter: true });

async function create({ userId, name, email }) {
    return await model.create({
        id: userId,
        name,
        email,
    });
}
async function getById(userId) {
    return await model.findByPk(userId)
}

module.exports = { getUserById: getById, createUser: create, user: model };
