module.exports = {
  autenticar() {
    return (req, res, next) => {
      if (req.session && req.session.autenticado) {
        req.session.timestamp = Date.now();
        next();
      } else {
        res.redirect('/login');
      }
    };
  },
  criarSessao() {
    const session = require('express-session')

    return session({
      secret: 'Conta do banco',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 600000
      }
    });
  }
}