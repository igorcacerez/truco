const express = require('express');
const router = express.Router();

// Importa o controller
const Sala = require('../controllers/sala.controllers');

// Rotas de sala
router.get('/', Sala.getAll);
router.post('/criar', Sala.criarNovaSala); // Rota para criar uma nova sala
router.post('/rodada', Sala.novaRodada); // Rota para criar uma nova rodada

module.exports = router;