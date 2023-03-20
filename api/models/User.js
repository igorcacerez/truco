const Sequelize = require('sequelize');
const db = require('./index.js');

const User = db.define('user', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    online: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    score : {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});

// Cria a tabela caso ela não exista
User.sync({force: false}).then(() => {
    console.log('Tabela Usuario criada com sucesso!');
});

module.exports = User;