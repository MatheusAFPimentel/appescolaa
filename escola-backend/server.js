const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/escola', { useNewUrlParser: true, useUnifiedTopology: true });

// Importar e usar as rotas
const alunoRoutes = require('./routes/aluno');
app.use('/alunos', alunoRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
