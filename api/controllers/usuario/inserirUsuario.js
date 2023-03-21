const UsuarioService = require('../../services/usuario.service');

/**
 * Método para inserir um usuário
 * @param {*} req
 * @param {*} res
 * @returns
 * @throws {Error} E-mail já cadastrado
 */
const inserirUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // Insere o usuário
        const user = await UsuarioService.inserirUsuario({ nome, email, senha });

        // Retorna o usuário
        res.status(201).json({
            error: false,
            data: {
                usuario: user
            }
        });

    } catch (error) {
        res.status(400).json({
            error: error.message,
            data: null
        });
    }
};

module.exports = inserirUsuario;