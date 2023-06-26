const ContaCorrente = require('../models/contaCorrenteModel');
const url = require('url');


async function homeView(req, res) {
  let pessoaNome = req.session.pessoa.nome;

  const urlObj = url.parse(req.url, true);
  const contaId = urlObj.query.contaId;

  const contaCorrente = await ContaCorrente.findOne({
    where: { id: contaId },
  });
  console.log(contaCorrente);

  let contaCorrenteNome = '';

  if (contaCorrente) {
    contaCorrenteNome = contaCorrente.nome;
    console.log(contaCorrente.nome);

  }

  console.log(contaCorrenteNome);


  res.render("home/home.html", { pessoa: pessoaNome, conta: contaCorrenteNome });
}



module.exports = {
  homeView
};