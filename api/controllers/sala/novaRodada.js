const salaService = require('../../services/sala.service');
const rodadaService = require('../../services/rodada.service');

/**
 * Função que cria uma nova rodada
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} Retorna um objeto com a nova rodada
 * @throws {Error} Retorna um erro
 */
const novaRodada = async (req, res) => {
    try {
        const { sala, rodada } = req.body;

        // Recupera a sala
        const salaAtiva = await salaService.getSalaId(sala);

        // Verifica se a rodada não existe
        const rodadaCad = await rodadaService.getRodadaSala(sala, rodada);
        if (rodadaCad) throw new Error('Rodada já cadastrada');

        // Gera o baralho 
        const baralho = await rodadaService.gerarBaralho();

        let salva = {
            num_rodada: rodada,
            vira: baralho.vira,
            baralho: {
                jogador1: baralho.jogador1,
                jogador2: baralho.jogador2,
                jogador3: baralho.jogador3,
                jogador4: baralho.jogador4
            },
        }

        // Salva a rodada
        const novaRodada = await rodadaService.novaRodada(salva, sala);

        res.status(200).json({ 
            error: false,
            data: {...novaRodada.dataValues}
        });

    } catch (error) {
        res.status(500).json({ 
            error: error.message,
            data: null
        });
    }
};

module.exports = novaRodada;