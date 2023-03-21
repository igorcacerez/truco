const express = require('express');
const router = express.Router();

// Importa o controller
const Usuario = require('../controllers/usuario.controllers');

// Rotas de usuário
router.get('/', Usuario.listarUsuarios);
router.post('/login', Usuario.login);
router.post('/cadastro', Usuario.inserirUsuario);
router.get('/:id', Usuario.listarUsuarioId);

module.exports = router;