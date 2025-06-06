const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  bio: DataTypes.TEXT,
});

module.exports = User;
