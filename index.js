const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./src/db');
const Pessoa = require('./src/models/pessoaModel');
const Usuario = require('./src/models/usuarioModel');
const Movimento = require('./src/models/movimentoModel');
const ContaCorrente = require('./src/models/contaCorrenteModel');

const app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({ extended: true }));

// Define as rotas da aplicação (declaradas na pasta /src/routes/)
app.use('/', require('./src/routes/pessoaRoutes'));
app.use('/', require('./src/routes/indexRoutes'));

db.sync(() => console.log(`Banco de dados conectado`));

const app_port = 8000
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port);
})

Pessoa.findByPk(1)
    .then((pessoa) => {
        if (pessoa) {
            usuarioBuild.setPessoa(pessoa);
            console.log("PESSOA =>", pessoa);
            return usuarioBuild.save();
        }
    })
    .then(() => {
        console.log("Usuário salvo com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao salvar o usuário:", error);
    });