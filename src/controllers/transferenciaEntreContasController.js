const ContaCorrente = require('../models/contaCorrenteModel');

function transferenciaEntreContasView(req, res) {
  res.render("transferencia/transferenciaEntreContas.html", { contaId: req.params.contaId });
}

async function processarTransferencia(req, res) {
  const contaId = req.params.contaId;
  const contaDestino = req.body.contaCorrente;
  const valor = req.body.valor;

  if (contaDestino === contaId) {
    const erro = "Você não pode transferir para sua própria conta.";
    res.render("transferencia/transferenciaEntreContas.html", { erro });
    return;
  }

  const contaDestinoExiste = await ContaCorrente.findOne({
    where: { id: contaDestino },
  });
  if (!contaDestinoExiste) {
    const erro = "A conta de destino não existe.";
    res.render("transferencia/transferenciaEntreContas.html", { erro });
    return;
  }

  const valorDeposito = parseFloat(valor);

  if (isNaN(valorDeposito) || valorDeposito <= 0) {
    const erro = "O valor da transferência não pode ser negativo.";
    res.render("transferencia/transferenciaEntreContas.html", { erro });
    return;
  }

  const contaOrigem = await ContaCorrente.findOne({
    where: { id: contaId },
  });

  if (!contaOrigem || contaOrigem.saldo < valorDeposito) {
    const erro = "A conta de origem não possui saldo suficiente.";
    res.render("transferencia/transferenciaEntreContas.html", { erro });
    return;
  }

  const novoSaldoOrigem = contaOrigem.saldo - valorDeposito;
  await contaOrigem.update({ saldo: novoSaldoOrigem });

  const novoSaldoDestino = contaDestinoExiste.saldo + valorDeposito;
  await contaDestinoExiste.update({ saldo: novoSaldoDestino });

  const mensagem = "Transferência realizada com sucesso!";
  res.render('home/home.html', { mensagem: mensagem, contaId: contaId });
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
  transferenciaEntreContasView,
  logout,
  processarTransferencia
};