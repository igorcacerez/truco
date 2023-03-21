const salaService = require('../../services/sala.service');

/**
 * Cria uma nova sala, 
 * verificando se o usuário já está em uma sala ativa
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 * @throws {Error}
 * @throws {SequelizeValidationError}
 */
const criarNovaSala = async (req, res) => {
    try {
        // Recupera id do usuario
        const { id } = req.body;

        // Verifica se o usuário já está em uma sala ativa
        let userInSala = await salaService.getSalaAtivaUsuario(id);

        if (userInSala) throw new Error('Você já está em uma sala ativa!');        

        // Cria uma nova sala
        let newSala = await salaService.novaSala({id});

        // Retorna a sala criada
        res.status(201).json({
            error: false,
            data : {
                sala: newSala
            }
        });

    } catch (error) {
        res.status(400).json({ 
            error: error.message,
            data: null
        });
    }
}

module.exports = criarNovaSala;