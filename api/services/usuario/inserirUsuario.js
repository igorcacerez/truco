const Usuario = require('../../models/Usuario');
const bcrypt = require('bcryptjs');
const md5 = require('md5');

/**
 * Método para inserir um usuário
 * @param {Usuario} usuario
 * @throws {Error} E-mail já cadastrado
 * @returns {Usuario} Usuario
 */ 
const inserirUsuario = async (usuario) => {
    // Criptografa a senha
    usuario.senha = bcrypt.hashSync(usuario.senha, 8); // 8 é o número de rounds

    // Verifica se o e-mail já está cadastrado
    const usuarioEmail = await Usuario.findOne({where: {email: usuario.email}});
    if(usuarioEmail) throw new Error('E-mail já cadastrado.');

    // Insere o usuário
    await Usuario.create(usuario);

    // Retorna o usuário
    return Usuario.findOne({where: {email: usuario.email}});
};

module.exports = inserirUsuario