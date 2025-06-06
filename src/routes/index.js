const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const formacaoRoutes = require("./formacaoRoutes");
const experienciaRoutes = require("./experienciaRoutes");
const projetoRoutes = require("./projetoRoutes");
const curriculoRoute = require("./curriculoRoute");



router.use("/usuarios", userRoutes);
router.use("/formacoes", formacaoRoutes);
router.use("/experiencias", experienciaRoutes);
router.use("/projetos", projetoRoutes);
router.use("/curriculo", curriculoRoute);




router.get("/", (req, res) => {
  res.send("API do Currículo rodando");
});

module.exports = router;
