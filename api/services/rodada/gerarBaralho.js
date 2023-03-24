/**
 * Função que gera um baralho de truco, 
 * embaralha e distribui as cartas para os jogadores
 * @returns {Object} Retorna um objeto com o baralho, a vira, e as cartas dos jogadores
 */
const gerarBaralho = async () => {
    let baralho = require('../../config/baralho.json');
    baralho = baralho.cartas;
    
    // Pega uma carta aleatória para ser a vira
    const vira = baralho.splice(Math.floor(Math.random() * baralho.length), 1)[0];

    // Percorre o barralho e adiciona o valor da carta
    await baralho.forEach((carta) => {
        if (vira.pontos === 6) {
            if (carta.pontos === 1) {
                console.log('entrou');
                carta.pontos = carta.id + 24;
            }
        } else {
            if (carta.pontos === (vira.pontos + 1)) {
                console.log('entrou');
                carta.pontos = carta.id + 24;
            }
        }
    });

    // Embaralha o baralho
    baralho.sort(() => Math.random() - 0.5);  

    // Pega 3 cartas para o jogador 1
    let jogador1 = baralho.splice(Math.floor(Math.random() * baralho.length), 3);

    // Pega 3 cartas para o jogador 2
    const jogador2 = baralho.splice(Math.floor(Math.random() * baralho.length), 3);

    // Pega 3 cartas para o jogador 3
    const jogador3 = baralho.splice(Math.floor(Math.random() * baralho.length), 3);

    // Pega 3 cartas para o jogador 4
    const jogador4 = baralho.splice(Math.floor(Math.random() * baralho.length), 3);

    // Retorna o barralho 
    return { baralho, vira, jogador1, jogador2, jogador3, jogador4 };
}

module.exports = gerarBaralho