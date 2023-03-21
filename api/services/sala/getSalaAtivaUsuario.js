const Sala = require('../../models/Sala');
const UserSala = require('../../models/UserSala');

const getSalaAtivaUsuario = async (idUser) => {
    try {
        // Busca as salas ativas do usuario
        let userInSala = await UserSala.findOne({
            where: {
                id_user: idUser
            },
            include: [{
                model: Sala,
                where: {
                    finalizado: false 
                }
            }]  
        });

        // Verifica se o usuário já está em uma sala ativa
        if (userInSala) {
            throw new Error('Você já está em uma sala ativa!');
        }

        return userInSala;

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getSalaAtivaUsuario;