const { DataTypes } = require("sequelize");
const sequelize = require("../../config/config.js");

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
});

module.exports = Category;
