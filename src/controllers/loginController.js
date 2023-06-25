const Usuario = require('../models/usuarioModel');
const Pessoa = require('../models/pessoaModel');

function loginView(req, res) {
  res.render("login/login.html", {});
}

async function entrarNaConta(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (usuario && usuario.senha === senha) {
      req.session.autenticado = true;
      req.session.usuario = usuario;
      await Pessoa.findOne({ where: { id: usuario.pessoa_id } }).then((pessoa) => {
        req.session.pessoa = pessoa;
      });

      return res.redirect('/escolher/conta');
    } else {
      const erro = 'Email ou senha inválidos.';
      return res.render('login/login.html', { erro });
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    const erro = 'Ocorreu um erro ao realizar o login.';
    res.render('login/login.html', { erro });
  }
}

module.exports = {
  loginView,
  entrarNaConta
};