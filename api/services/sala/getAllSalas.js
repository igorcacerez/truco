const Sala = require('../../models/Sala');

/**
 * Método responsável por buscar todas as salas
 * @returns {Array} Retorna um array com todas as salas
 */
const getAllSalas = async () => {
    try {
        // Busca todas as salas
        return await Sala.findAll();
    } catch (error) {
        throw new Error(error.message);
    }
}

// Exporta o método
module.exports = getAllSalas;