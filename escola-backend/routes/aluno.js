const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.post('/add', async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
