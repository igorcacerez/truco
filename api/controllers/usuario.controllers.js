// Description: Arquivo responsável pelas rotas da API relacionado a classe 'Usuario'.
// Importa os métodos
const login = require('./usuario/login');
const inserirUsuario = require('./usuario/inserirUsuario');
const listarUsuarios = require('./usuario/listarUsuarios');
const listarUsuarioId = require('./usuario/listarUsuarioId');

// Exporta os métodos
module.exports = {
    login,
    inserirUsuario,
    listarUsuarios,
    listarUsuarioId
};

