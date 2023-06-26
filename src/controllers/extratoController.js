function extratoView(req, res) {
  res.render("extrato/extrato.html", {});
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
  logout
};