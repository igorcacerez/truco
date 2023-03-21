const Usuario = require('../../models/Usuario');

/**
 * Método para alterar um usuário
 * @param altera
 * @param id
 * @returns {Promise<*>}
 */
const alterarUsuario = async (altera, id) => {
    return await Usuario.update(altera, {
        where: {
            id: id
        }
    });
}

module.exports = alterarUsuario;