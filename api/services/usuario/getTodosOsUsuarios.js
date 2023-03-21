const Usuario = require('../../models/Usuario');

/**
 * Método responsável por retornar todos os usuários
 * @returns {Usuario[]} Todos os usuários
 */
const getTodosOsUsuarios = async () => {
    return Usuario.findAll();
};

module.exports = getTodosOsUsuarios