const Rodada = require('../../models/Rodada');

/**
 * Método que cria uma nova rodada e salva no banco de dados
 * @param {Object} salva 
 * @param {int} sala 
 * @returns 
 */
const novaRodada = async (salva, sala) => {
    // Adiciona a sala a rodada
    salva.id_sala = sala;

    // Salva a rodada
    const rodada = await Rodada.create(salva);
    if (!rodada) throw new Error('Erro ao salvar a rodada');

    // Retorna a rodada
    return rodada;
}

module.exports = novaRodada;