const UserSala = require('../../models/UserSala');

/** 
 * Método que busca um usuário na sala
 * @param {int} idUser
 * @param {int} idSala
 * @returns {Object} Retorna um objeto com o usuário
 * @throws {Error} Retorna um erro caso o usuário não seja encontrado
 */
const getUsuarioSala = async (idUser, idSala) => {

    // Busca o usuário na sala
    const userSala = await UserSala.findOne({where: {
        id_user: idUser,
        id_sala: idSala
    }});

    // Verifica se o usuário foi encontrado
    if (!userSala) throw new Error('Usuário não encontrado na sala');

    // Retorna o usuário
    return userSala;
}

// Exporta o método
module.exports = getUsuarioSala;