const express = require("express");
const { Autor, Emprestimo, Livro, Usuario } = require("../model/model");

const router = express.Router();

router.get("/autores", async (_, res) => {
  try {
    const data = await Autor.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/emprestimos", async (_, res) => {
  try {
    const data = await Emprestimo.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/livros", async (_, res) => {
  try {
    const data = await Livro.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/usuarios", async (_, res) => {
  try {
    const data = await Usuario.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
