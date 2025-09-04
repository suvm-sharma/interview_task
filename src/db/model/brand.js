const { DataTypes } = require("sequelize");
const sequelize = require("../../config/config.js");

const Brand = sequelize.define("Brand", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
});

module.exports = Brand;
