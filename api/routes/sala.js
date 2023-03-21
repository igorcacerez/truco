const express = require('express');
const router = express.Router();

// Importa o controller
const Sala = require('../controllers/sala.controllers');

// Rotas de sala
router.get('/', Sala.getAll);
router.post('/criar', Sala.criarNovaSala);

module.exports = router;