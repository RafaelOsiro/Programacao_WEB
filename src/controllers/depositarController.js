const ContaCorrente = require('../models/contaCorrenteModel');
const Movimento = require('../models/movimentoModel');
const TextoUtil = require('../util/texto');

function depositarView(req, res) {
  res.render("depositar/depositar.html", {});
}

async function realizarDeposito(req, res) {
  const { contaCorrente, valor } = req.body;

  try {
    const contaExistente = await ContaCorrente.findOne({ where: { numero: contaCorrente } });
    if (!contaExistente) {
      throw new Error('A conta corrente informada não existe.');
    }

    const valorDeposito = parseFloat(valor);
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
      throw new Error('O valor do depósito deve ser maior que zero.');
    }

    if (valorDeposito > 5000) {
      throw new Error('O valor do depósito não pode ultrapassar a quantia de R$ 5.000,00.');
    }

    const novoSaldo = contaExistente.saldo + valorDeposito;
    await contaExistente.update({ saldo: novoSaldo });

    const movimento = await Movimento.create({
      conta_corrente_id: contaExistente.id,
      tipo: 'C',
      data_movimento: new Date(),
      valor: valorDeposito,
      observacao: 'Depósito em caixa eletrônico'
    });

    const valorFormatado = TextoUtil.formatarValor(valorDeposito);

    const mensagem = `O valor ${valorFormatado} foi depositado na conta: ${contaExistente.numero} com sucesso.`;

    res.render('index/index.html', { mensagem });
  } catch (error) {
    console.error('Erro ao realizar o depósito:', error);
    res.render('depositar/depositar.html', { erro: error.message });
  }
}

module.exports = {
  depositarView,
  realizarDeposito
};