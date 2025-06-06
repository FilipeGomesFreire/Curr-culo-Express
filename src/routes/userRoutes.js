const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Criar usuário
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário", details: err.message });
  }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Buscar um usuário pelo ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: "Usuário não encontrado" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// Atualizar usuário por ID
router.put("/:id", async (req, res) => {
  try {
    const [linhasAtualizadas] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    if (linhasAtualizadas === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const usuarioAtualizado = await User.findByPk(req.params.id);
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar usuário", details: err.message });
  }
});

// Deletar usuário por ID
router.delete("/:id", async (req, res) => {
  try {
    const linhas = await User.destroy({ where: { id: req.params.id } });

    if (linhas === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar usuário", details: err.message });
  }
});


module.exports = router;
