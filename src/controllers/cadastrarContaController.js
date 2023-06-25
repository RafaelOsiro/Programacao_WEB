const ContaCorrente = require('../models/contaCorrenteModel');

function cadastrarContaView(req, res) {
  res.render("cadastrarConta/cadastrarConta.html", {});
}

async function pegarUltimoNumeroContaConrrete() {
  let ultimaContaCorrente = await ContaCorrente.findOne({ order: [['id', 'DESC']] });
  let proximoNumeroContaCorrente;

  if (ultimaContaCorrente) {
    const ultimoNumeroContaCorrente = ultimaContaCorrente.numero;
    proximoNumeroContaCorrente = ultimoNumeroContaCorrente + 1;
  } else {
    proximoNumeroContaCorrente = 1;
  }

  return proximoNumeroContaCorrente;
}

async function cadastrarConta(req, res) {
  const { nome } = req.body;
  const dataAbertura = new Date().toLocaleDateString('pt-BR');
  const numeroContaCorrente = await pegarUltimoNumeroContaConrrete();

  try {
    const contaCorrente = await ContaCorrente.create({
      nome,
      numero: numeroContaCorrente,
      data_abertura: dataAbertura,
      saldo: 0,
      usuario_id: 1,
    });

    console.log('Conta corrente cadastrada:', contaCorrente);
    const mensagem = 'Conta corrente cadastrada com sucesso.';
    res.render('escolherConta/escolherConta.html', { mensagem });
  } catch (error) {
    console.error('Erro ao cadastrar conta corrente:', error);
    const erro = 'Ocorreu um erro ao cadastrar a conta.';
    res.render('cadastrarConta/cadastrarConta.html', { erro });
  }
}

module.exports = {
  cadastrarContaView,
  cadastrarConta,
};