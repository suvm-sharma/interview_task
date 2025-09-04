const { DataTypes } = require("sequelize");
const sequelize = require("../../config/config.js");

const ProductVarientOptions = sequelize.define("ProductVarientOptions", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    value: {
        type: DataTypes.STRING,
    },
});

module.exports = ProductVarientOptions;
