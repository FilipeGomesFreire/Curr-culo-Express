const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const Projeto = sequelize.define("Projeto", {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  link: DataTypes.STRING,
});

Projeto.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Projeto, { foreignKey: "userId" });

module.exports = Projeto;

