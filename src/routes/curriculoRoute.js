const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Formacao = require("../models/Formacao");
const Experiencia = require("../models/Experiencia");
const Projeto = require("../models/Projeto");

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId, {
      attributes: ["id", "nome", "email", "bio"],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const formacoes = await Formacao.findAll({ where: { userId } });
    const experiencias = await Experiencia.findAll({ where: { userId } });
    const projetos = await Projeto.findAll({ where: { userId } });

    res.json({
      usuario: user,
      formacoes,
      experiencias,
      projetos,
    });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar currículo", details: err.message });
  }
});

module.exports = router;
