const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const Experiencia = sequelize.define("Experiencia", {
  empresa: DataTypes.STRING,
  cargo: DataTypes.STRING,
  inicio: DataTypes.STRING,
  fim: DataTypes.STRING,
});

Experiencia.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Experiencia, { foreignKey: "userId" });

module.exports = Experiencia;
