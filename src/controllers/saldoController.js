function saldoView(req, res) {
  res.render("saldo/saldo.html", {});
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