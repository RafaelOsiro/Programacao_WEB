const ContaCorrente = require('../models/contaCorrenteModel');

async function buscarContasCorrentes(usuarioId) {
  const contasCorrentes = await ContaCorrente.findAll({
    where: { usuario_id: usuarioId },
  });

  return contasCorrentes;
}

async function escolherContaView(req, res) {
  try {
    const pessoaNome = req.session.pessoa.nome;
    const usuarioId = req.session.usuario.id;

    const contasCorrentes = await buscarContasCorrentes(usuarioId);

    let opcoes = '';

    if (contasCorrentes.length > 0) {
      opcoes = contasCorrentes.map(conta => `<option value="${conta.id}">Nome da conta: ${conta.nome} - Número da Conta: ${conta.id}</option>`).join('');
    }

    res.render('escolherConta/escolherConta.html', { pessoa: pessoaNome, options: opcoes });
  } catch (error) {
    console.error('Erro ao exibir a página de escolher conta:', error);
    const mensagem = 'Ocorreu um erro ao exibir a página de escolher conta.';
    res.render('escolherConta/escolherConta.html', { mensagem });
  }
}

async function cadastrarConta(req, res) {
  const { nome } = req.body;
  const dataAbertura = new Date().toLocaleDateString('pt-BR');
  const numeroContaCorrente = await pegarUltimoNumeroContaConrrete();
  const usuarioId = req.session.usuario.id;

  try {
    const contaCorrente = await ContaCorrente.create({
      nome,
      numero: numeroContaCorrente,
      data_abertura: dataAbertura,
      saldo: 0,
      usuario_id: usuarioId,
    });

    console.log('Conta corrente cadastrada:', contaCorrente);
    const mensagem = 'Conta corrente cadastrada com sucesso.';
    res.redirect('/escolher/conta?mensagem=' + encodeURIComponent(mensagem));
  } catch (error) {
    console.error('Erro ao cadastrar uma conta corrente:', error);
    const mensagem = 'Ocorreu um erro ao cadastrar a conta corrente.';
    res.redirect('/escolher/conta?mensagem=' + encodeURIComponent(mensagem));
  }
}

function escolherContaEntrar(req, res) {
  const contaId = req.body['escolher-conta'];

  if (contaId) {
    res.redirect(`/home/${contaId}`);
  } else {
    const erro = 'Nenhuma conta selecionada.';
    res.render('escolherConta/escolherConta.html', { erro });
  }
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
  cadastrarConta,
  logout
};