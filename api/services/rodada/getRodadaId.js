const Rodada = require('../../models/Rodada');

/**
 * Método que busca uma rodada pelo id
 * @param {int} id
 * @returns {Object} Retorna um objeto com a rodada encontrada
 * @throws {Error} Caso a rodada não seja encontrada
 */
const getRodadaId = async (id) => {
    // Busca a rodada pelo id
    const rodadaBusca = await Rodada.findOne({where: {id}});

    // Verifica se a rodada foi encontrada
    if (!rodadaBusca) throw new Error('Rodada não encontrada');

    // Retorna a rodada
    return rodadaBusca;
}

module.exports = getRodadaId;