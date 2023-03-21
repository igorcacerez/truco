const Sequelize = require('sequelize');
const db = require('./index.js');
const Sala = require('./Sala.js');

const Rodada = db.define('rodada', {
    num_rodada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    vira: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    baralho: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
    },
    jogo: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
    },
    finalizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

// Cria a relação de 1 para N
Rodada.belongsTo(Sala, {foreignKey: 'id_sala'});

// Cria a tabela caso ela não exista
Rodada.sync({force: false}).then(() => {
    console.log('Tabela Rodada criada com sucesso!');
});

module.exports = Rodada;