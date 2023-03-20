const Sequelize = require('sequelize');
const db = require('./index.js');
const User = require('./User.js');
const Sala = require('./Sala.js');

const UserSala = db.define('user_sala', {
    placar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    win: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    cartas: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
        defaultValue: [],
    }
});

// Cria a relação de 1 para N
UserSala.belongsTo(Sala, {foreignKey: 'id_sala'});
UserSala.belongsTo(User, {foreignKey: 'id_user'});

// Cria a tabela caso ela não exista
UserSala.sync({force: false}).then(() => {
    console.log('Tabela UserSala criada com sucesso!');
});