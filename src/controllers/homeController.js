const ContaCorrente = require('../models/contaCorrenteModel');
const saldoController = require('../controllers/saldoController');
const url = require('url');

async function homeView(req, res) {
  let pessoaNome = req.session.pessoa.nome;

  const urlObj = url.parse(req.url, true);
  const contaId = urlObj.query.contaId;

  const contaCorrente = await ContaCorrente.findOne({
    where: { id: contaId },
  });

  let contaCorrenteNome = '';

  if (contaCorrente) {
    contaCorrenteNome = contaCorrente.nome;
  }

  res.render("home/home.html", { pessoa: pessoaNome, conta: contaCorrenteNome, id_saldo: contaId, id_hist: contaId, contaId: contaId });
}


async function consultarSaldo(req, res) {
  const contaId = req.query.contaId;

  try {
    const contaCorrente = await ContaCorrente.findOne({
      where: { id: contaId },
    });

    if (contaCorrente) {
      const saldo = contaCorrente.saldo;
      res.render('saldo/saldo.html', { saldo });
    } else {
      const mensagem = 'Conta não encontrada.';
      res.render('saldo/saldo.html', { mensagem });
    }
  } catch (error) {
    console.error('Erro ao consultar saldo:', error);
    const mensagem = 'Ocorreu um erro ao consultar o saldo.';
    res.render('saldo/saldo.html', { mensagem });
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
  homeView,
  logout,
  consultarSaldo
};