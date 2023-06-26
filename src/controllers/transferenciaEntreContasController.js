function transferenciaEntreContasView(req, res) {
  res.render("transferencia/transferenciaEntreContas.html", {});
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
  logout
};