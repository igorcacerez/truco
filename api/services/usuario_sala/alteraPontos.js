const UserSala = require('../../models/UserSala');

/**
 * Método responsável por alterar os pontos de um usuário
 * @param {*} idUser
 * @param {*} pontos
 * @returns {Object} user - Usuário alterado
 * @throws {Error} - Usuário não encontrado
 */
const alteraPontos = async (idUser, pontos) => {
    // Busca o usuário
    const user = await UserSala.findOne({ where: { id_user: idUser } });

    // Verifica se o usuário existe
    if (!user) throw new Error('Usuário não encontrado');

    // Altera os pontos do usuário
    user.placar += pontos;
    await user.save();

    // Retorna o usuário
    return user;
}

module.exports = alteraPontos;