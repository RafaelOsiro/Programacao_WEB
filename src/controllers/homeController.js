const Pessoa = require('../models/pessoaModel');

function homeView(req, res) {
  let pessoa = req.session.pessoa.nome;

  res.render("home/home.html", { pessoa });
}



module.exports = {
  homeView
};