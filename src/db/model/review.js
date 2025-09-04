const { DataTypes } = require("sequelize");
const sequelize  = require("../../config/config.js");

const Review = sequelize.define("Review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rating: {
        type: DataTypes.STRING,
    },
    comment: {
        type: DataTypes.STRING,
    },
});

module.exports = Review;
