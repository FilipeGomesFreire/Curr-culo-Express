const express = require("express");
const router = express.Router();
const Projeto = require("../models/Projeto");
const User = require("../models/User");

// Criar novo projeto
router.post("/", async (req, res) => {
  try {
    const projeto = await Projeto.create(req.body);
    res.status(201).json(projeto);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar projeto", details: err.message });
  }
});

// Listar todos os projetos
router.get("/", async (req, res) => {
  try {
    const lista = await Projeto.findAll({ include: User });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar projetos" });
  }
});

// Buscar projetos por usuário
router.get("/usuario/:userId", async (req, res) => {
  try {
    const lista = await Projeto.findAll({
      where: { userId: req.params.userId },
    });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar projetos do usuário" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [linhas] = await Projeto.update(req.body, {
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Projeto não encontrado" });
    }

    const projetoAtualizado = await Projeto.findByPk(req.params.id);
    res.json(projetoAtualizado);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar projeto", details: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const linhas = await Projeto.destroy({
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Projeto não encontrado" });
    }

    res.json({ mensagem: "Projeto deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar projeto", details: err.message });
  }
});


module.exports = router;
