const Sequelize = require('sequelize');
const db = require('./index.js');
const Usuario = require('./Usuario.js');
const Sala = require('./Sala.js');

const UserSala = db.define('user_sala', {
    placar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});

// Cria a relação de 1 para N
UserSala.belongsTo(Sala, {foreignKey: 'id_sala'});
UserSala.belongsTo(Usuario, {foreignKey: 'id_user'});

// Cria a tabela caso ela não exista
UserSala.sync({force: false}).then(() => {
    console.log('Tabela UserSala criada com sucesso!');
});

module.exports = UserSala;