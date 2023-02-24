const mongoose = require("mongoose");

const autoresSchema = new mongoose.Schema({
  nome: {
    required: true,
    type: String,
  },
});

const livrosSchema = new mongoose.Schema({
  nome: {
    required: true,
    type: String,
  },
  autores: {
    required: true,
    type: Array.of(autoresSchema),
  },
});

const usuariosSchema = new mongoose.Schema({
  nome: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    select: false,
    type: String,
  },
});

const emprestimosSchema = mongoose.Schema({
  livro: {
    required: true,
    type: livrosSchema,
  },
  usuario: {
    required: true,
    type: usuariosSchema,
  },
  empresatado_em: {
    required: true,
    type: Date,
  },
  devolvido_em: {
    required: false,
    type: Date,
  },
  avaliacao: {
    required: true,
    default: 0,
    type: Number,
  },
});

module.exports = {
  Autor: mongoose.model("autores", autoresSchema),
  Emprestimo: mongoose.model("emprestimos", emprestimosSchema),
  Livro: mongoose.model("livros", livrosSchema),
  Usuario: mongoose.model("usuarios", usuariosSchema),
};
