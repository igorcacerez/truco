const Sala = require('../../models/Sala');
const UserSala = require('../../models/UserSala');

/**
 * Método para criar uma sala e adicionar 
 * o usuário que a criou na sala
 * @param {Usuario} user
 * @param {Sala} sala
 * @returns {Sala} Sala
 */
const novaSala = async (user, sala = null) => {
    
    // Cria uma nova sala 
    let game = await Sala.create(sala);

    // Adiciona o usuário na sala
    await UserSala.create({
        id_user: user.id,
        id_sala: game.id
    });

    // Retorna a sala
    return game;
}

// Exporta o método
module.exports = novaSala