const salaService = require('../../services/sala.service');

/**
 * Busca todas as salas
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Retorna um objeto com todas as salas
 * @throws {Error} Retorna um erro caso não consiga buscar as salas
 */
const getAll = async (req, res) => {
    try {

        // Busca todas as salas
        const salas = await salaService.getAllSalas();

        res.status(200).json({
            error: false,
            data: {salas}
        });
    } catch (error) {
        res.status(500).json({ 
            error: error.message, 
            data: null 
        });
    }
}

module.exports = getAll;
