const rodadaService = require('../../services/rodada.service');
const usuarioSalaService = require('../../services/usuario_sala.service');

/**
 * Método responsável por alterar a rodada de uma sala
 * @param {*} req
 * @param {*} res
 * @returns
 */
const alteraRodada = async (req, res) => {
    const { id, jogadas, pontos, ganhador } = req.body;

    // Busca a rodada 
    let rodada = await rodadaService.getRodadaId(id);

    // Altera os dados da rodada
    let altera = {
        jogo: {
            pontos,
            ganhador,
            jogadas,
        },
        finalizado: true
    }

    // Atualiza a rodada
    rodada = await rodadaService.alteraRodada(id, altera);

    // Recupera o usuario ganhador 
    let usuarioGanhador = await usuarioSalaService.getUsuarioSala(ganhador, rodada.id_sala);

    // Atualiza o usuario ganhador
    let usuario = {
        pontos: usuarioGanhador.pontos + pontos
    }
};

module.exports = alteraRodada;