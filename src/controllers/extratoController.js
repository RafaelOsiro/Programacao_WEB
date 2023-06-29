const Movimento = require('../models/movimentoModel');
const { Op } = require('sequelize');
const TextoUtil = require('../util/texto');

async function extratoView(req, res) {
  const contaId = req.params.contaId;
  const dataAtual = new Date();
  const dataInicial = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const dataFinal = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

  try {
    const extrato = await Movimento.findAll({
      where: {
        conta_corrente_id: contaId,
        data_movimento: {
          [Op.between]: [dataInicial, dataFinal]
        }
      },
      order: [['data_movimento', 'DESC']]
    });

    const movimentos = extrato.map((movimento) => {
      let operacao;
      let valor;
      const dataMovimento = new Date(movimento.data_movimento);
      const dataFormatada = TextoUtil.formatarDataComHora(dataMovimento);
      const valorFormatado = TextoUtil.formatarValor(movimento.valor);

      if (movimento.tipo === 'D' && movimento.conta_corrente_origem && movimento.conta_corrente_destino) {
        operacao = `Transferência para conta ${movimento.conta_corrente_destino}`;
        valor = -movimento.valor;
      } else if (movimento.tipo === 'C' && movimento.conta_corrente_origem && movimento.conta_corrente_destino) {
        operacao = `Transferência de conta ${movimento.conta_corrente_origem}`;
        valor = movimento.valor;
      } else if (movimento.tipo === 'C' && !movimento.conta_corrente_origem && !movimento.conta_corrente_destino) {
        operacao = 'Depósito em Caixa Eletrônico';
        valor = movimento.valor;
      } else {
        operacao = movimento.operacao;
        valor = movimento.valor;
      }

      return {
        data: dataFormatada,
        tipo: movimento.tipo,
        operacao: operacao,
        valor: valorFormatado
      };
    });

    res.render("extrato/extrato.html", { contaId, movimentos });
  } catch (error) {
    console.error('Erro ao pesquisar extrato:', error);
    res.status(500).send('Erro ao pesquisar extrato');
  }
}

async function consultarExtrato(req, res) {
  const contaId = req.params.contaId;
  const dataInicial = new Date(req.body.data_inicial);
  const dataFinal = new Date(req.body.data_final);

  if (isNaN(dataInicial) || isNaN(dataFinal)) {
    const erro = 'Datas inválidas';
    res.render('extrato/extrato.html', { erro: erro, contaId: contaId });
    return;
  }


  dataFinal.setDate(dataFinal.getDate() + 1);

  try {
    const extrato = await Movimento.findAll({
      where: {
        conta_corrente_id: contaId,
        data_movimento: {
          [Op.gte]: dataInicial,
          [Op.lte]: dataFinal
        }
      },
      order: [['data_movimento', 'DESC']]
    });

    const movimentos = extrato.map((movimento) => {
      let operacao;
      let valor;
      const dataMovimento = new Date(movimento.data_movimento);
      const dataFormatada = TextoUtil.formatarDataComHora(dataMovimento);
      const valorFormatado = TextoUtil.formatarValor(movimento.valor);

      if (movimento.tipo === 'D' && movimento.conta_corrente_origem && movimento.conta_corrente_destino) {
        operacao = `Transferência para conta ${movimento.conta_corrente_destino}`;
        valor = -movimento.valor;
      } else if (movimento.tipo === 'C' && movimento.conta_corrente_origem && movimento.conta_corrente_destino) {
        operacao = `Transferência de conta ${movimento.conta_corrente_origem}`;
        valor = movimento.valor;
      } else if (movimento.tipo === 'C' && !movimento.conta_corrente_origem && !movimento.conta_corrente_destino) {
        operacao = 'Depósito em Caixa Eletrônico';
        valor = movimento.valor;
      } else {
        operacao = movimento.operacao;
        valor = movimento.valor;
      }

      return {
        data: dataFormatada,
        tipo: movimento.tipo,
        operacao: operacao,
        valor: valorFormatado
      };
    });

    dataInicial.setDate(dataInicial.getDate() + 1);
    const mensagem = `Extrato entre a data ${TextoUtil.formatarData(dataInicial)} e ${TextoUtil.formatarData(dataFinal)}`;
    res.render("extrato/extrato.html", { contaId: contaId, movimentos, mensagem: mensagem });
  } catch (error) {
    console.error('Erro ao pesquisar extrato:', error);
    res.render('extrato/extrato.html', { erro: error.message, contaId: contaId, movimentos });
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
  extratoView,
  logout,
  consultarExtrato
};