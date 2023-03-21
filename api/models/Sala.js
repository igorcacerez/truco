const Sequelize = require('sequelize');
const db = require('./index.js');

const Sala = db.define('sala', {
    num_users: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
    },
    win: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    finalizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});


// Cria a tabela caso ela não exista
Sala.sync({force: false}).then(() => {
    console.log('Tabela Sala criada com sucesso!');
});

module.exports = Sala;