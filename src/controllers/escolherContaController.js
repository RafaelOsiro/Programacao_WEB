const ContaCorrente = require('../models/contaCorrenteModel');

async function escolherContaView(req, res) {
  try {
    const pessoaNome = req.session.pessoa.nome;
    const usuarioId = req.session.usuario.id;

    const contasCorrentes = await ContaCorrente.findAll({
      where: { usuario_id: usuarioId },
    });

    let opcoes = '';

    if (contasCorrentes.length > 0) {
      opcoes = contasCorrentes.map(conta => `<option value="${conta.id}">${conta.nome}</option>`).join('');
    }

    res.render('escolherConta/escolherConta.html', { pessoa: pessoaNome, options: opcoes });
  } catch (error) {
    console.error('Erro ao exibir a página de escolher conta:', error);
    const mensagem = 'Ocorreu um erro ao exibir a página de escolher conta.';
    res.render('escolherConta/escolherConta.html', { mensagem });
  }
}

function escolherContaEntrar(req, res) {
  const contaId = req.body['escolher-conta'];
  res.redirect(`/home?contaId=${contaId}`);
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error('Erro ao destruir a sessão:', err);
    }
    res.redirect('/login');
  });
}

module.exports = {
  escolherContaView,
  escolherContaEntrar,
  logout
};