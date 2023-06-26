const ContaCorrente = require('../models/contaCorrenteModel');
const url = require('url');

async function saldoView(req, res) {
  const contaId = req.params.id;

  console.log("CONTA " + contaId);

  const contaCorrente = await ContaCorrente.findOne({
    where: { id: contaId },
  });

  let saldoContaCorrente = '';

  if (contaCorrente) {
    saldoContaCorrente = contaCorrente.saldo;
  }

  const saldoFormatado = saldoContaCorrente.toFixed(2).replace(".", ",");

  res.render("saldo/saldo.html", { saldo: saldoFormatado, contaId: contaId });
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
  saldoView,
  logout
};