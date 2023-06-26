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
  // Obtenha os dados da conta selecionada pelo usuário
  const contaId = req.body['escolher-conta'];

  // Faça o redirecionamento para a página "home/home.html" com o ID da conta como parâmetro
  res.redirect(`/home?contaId=${contaId}`);
}

module.exports = {
  escolherContaView,
  escolherContaEntrar
};