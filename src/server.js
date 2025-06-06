const app = require("./app");
const sequelize = require("./database");

const PORT = 3000;

require("./models/User");
require("./models/Formacao");
require("./models/Experiencia");
require("./models/Projeto");

sequelize.sync({ force: false }) // use force: true se quiser recriar tabelas
  .then(() => {
    console.log("Conectado ao banco com sucesso.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco:", err);
  });
