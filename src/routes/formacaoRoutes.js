const express = require("express");
const router = express.Router();
const Formacao = require("../models/Formacao");
const User = require("../models/User");

// Criar formação vinculada a um usuário
router.post("/", async (req, res) => {
  try {
    const formacao = await Formacao.create(req.body);
    res.status(201).json(formacao);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar formação", details: err.message });
  }
});

// Listar todas as formações
router.get("/", async (req, res) => {
  try {
    const lista = await Formacao.findAll({ include: User });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar formações" });
  }
});

// Buscar formações de um usuário específico
router.get("/usuario/:userId", async (req, res) => {
  try {
    const lista = await Formacao.findAll({
      where: { userId: req.params.userId },
    });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar formações do usuário" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [linhas] = await Formacao.update(req.body, {
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Formação não encontrada" });
    }

    const formacaoAtualizada = await Formacao.findByPk(req.params.id);
    res.json(formacaoAtualizada);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar formação", details: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const linhas = await Formacao.destroy({
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Formação não encontrada" });
    }

    res.json({ mensagem: "Formação deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar formação", details: err.message });
  }
});



module.exports = router;
