const Sequelize = require('sequelize');
const db = require('./index.js');

const Sala = db.define('sala', {
    users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
    },
    jogo: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: {},
    },
    vira: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    cartas: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: {},
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});


// Cria a tabela caso ela não exista
Sala.sync({force: false}).then(() => {
    console.log('Tabela Sala criada com sucesso!');
});

module.exports = Sala;