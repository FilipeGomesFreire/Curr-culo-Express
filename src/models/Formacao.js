const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const Formacao = sequelize.define("Formacao", {
  curso: DataTypes.STRING,
  instituicao: DataTypes.STRING,
  inicio: DataTypes.STRING,
  fim: DataTypes.STRING,
});

Formacao.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Formacao, { foreignKey: "userId" });

module.exports = Formacao;
