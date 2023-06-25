function escolherContaView(req, res) {
  let pessoa = req.session.pessoa.nome;

  res.render("escolherConta/escolherConta.html", { pessoa });
}



module.exports = {
  escolherContaView
};