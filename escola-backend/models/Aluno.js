// models/Aluno.js
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  notas: [Number],
});

module.exports = mongoose.model('Aluno', alunoSchema);
