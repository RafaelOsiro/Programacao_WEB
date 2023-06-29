const Movimento = require('../models/movimentoModel');
const { Op } = require('sequelize');

async function extratoView(req, res) {
  const contaId = req.params.contaId;
  const dataAtual = new Date();
  console.log("AAAAA" + dataAtual);
  const dataInicial = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  console.log("BBBBB" + dataInicial);
  const dataFinal = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
  console.log("CCCCC" + dataFinal);

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

      // Formatação da data
      const dataMovimento = new Date(movimento.data_movimento);
      const dataFormatada = `${dataMovimento.getDate()}/${dataMovimento.getMonth() + 1}/${dataMovimento.getFullYear()} - ${dataMovimento.getHours()}:${dataMovimento.getMinutes()}`;

      // Formatação do valor
      const valorFormatado = `R$ ${movimento.valor.toFixed(2).replace('.', ',')}`;

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
        // Caso não atenda a nenhuma das condições anteriores, utilize os valores padrão
        operacao = movimento.operacao;
        valor = movimento.valor;
      }

      console.log("DATAA " + dataFormatada + " TIPOO " + movimento.tipo + " OPERACAOO " + operacao + " VALORR " + valorFormatado);
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

    res.render("extrato/extrato.html", { contaId, movimento: extrato });
  } catch (error) {
    console.error('Erro ao pesquisar extrato:', error);
    res.status(500).send('Erro ao pesquisar extrato');
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