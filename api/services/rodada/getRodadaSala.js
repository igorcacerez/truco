const Rodada = require('../../models/Rodada');

/**
 * Método que busca uma rodada pelo id da sala e numero da rodada
 * @param {int} sala 
 * @param {int} rodada 
 * @returns {Object} Retorna um objeto com a rodada encontrada
 */
const getRodadaSala = async (sala, rodada) => {
    // Busca a rodada pelo id da sala e id da rodada
    const rodadaBusca = await Rodada.findOne({
        where: {
          id_sala: sala,
          num_rodada: rodada
        }
    });

    // Retorna a rodada
    return rodadaBusca;
}

module.exports = getRodadaSala;