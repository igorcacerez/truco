const Rodada = require('../../models/Rodada');

/**
 * Método que altera uma rodada
 * @param {int} id 
 * @param {Object} altera 
 * @returns {Object} Retorna um objeto com a rodada alterada
 */
const alteraRodada = async (id, altera) => {
    // Altera os dados da rodada
    await Rodada.update(altera, {where: {id: id}});

    // Retorna a rodada
    return await Rodada.findOne({where: {id: id}});
}

module.exports = alteraRodada;