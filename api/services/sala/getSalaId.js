const Sala = require('../../models/Sala');

/**
 * Método que busca uma sala pelo id
 * @param {int} id 
 * @returns {Object} Retorna um objeto com as informações da sala
 */
const getSalaId = async (id) => {
    // Busca a sala pelo id 
    const salaId = Sala.findOne({where: {id}});

    // Verifica se a sala nã existe
    if (!salaId) {
        throw new Error('Sala não encontrada');
    }

    return salaId;
};

module.exports = getSalaId;