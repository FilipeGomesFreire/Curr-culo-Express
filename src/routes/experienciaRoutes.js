const express = require("express");
const router = express.Router();
const Experiencia = require("../models/Experiencia");
const User = require("../models/User");

// Criar nova experiência
router.post("/", async (req, res) => {
  try {
    const experiencia = await Experiencia.create(req.body);
    res.status(201).json(experiencia);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar experiência", details: err.message });
  }
});

// Listar todas as experiências
router.get("/", async (req, res) => {
  try {
    const lista = await Experiencia.findAll({ include: User });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar experiências" });
  }
});

// Buscar experiências por usuário
router.get("/usuario/:userId", async (req, res) => {
  try {
    const lista = await Experiencia.findAll({
      where: { userId: req.params.userId },
    });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar experiências do usuário" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const [linhas] = await Experiencia.update(req.body, {
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Experiência não encontrada" });
    }

    const experienciaAtualizada = await Experiencia.findByPk(req.params.id);
    res.json(experienciaAtualizada);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar experiência", details: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const linhas = await Experiencia.destroy({
      where: { id: req.params.id },
    });

    if (linhas === 0) {
      return res.status(404).json({ error: "Experiência não encontrada" });
    }

    res.json({ mensagem: "Experiência deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar experiência", details: err.message });
  }
});


module.exports = router;
