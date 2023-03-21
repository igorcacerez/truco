const express = require('express');
const router = express.Router();

// Importa o controller
const Usuario = require('../controllers/usuario.controllers');

// Rotas de usuário
router.get('/', Usuario.listarUsuarios);
router.get('/:id', Usuario.listarUsuarioId);
router.post('/login', Usuario.login);
router.post('/cadastro', Usuario.inserirUsuario);

module.exports = router;