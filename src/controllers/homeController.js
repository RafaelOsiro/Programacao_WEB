const ContaCorrente = require('../models/contaCorrenteModel');
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

  res.render("home/home.html", { pessoa: pessoaNome, conta: contaCorrenteNome });
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
  logout
};