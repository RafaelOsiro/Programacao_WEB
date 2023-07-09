var express = require('express')
var calculadora = require("./calculadora.js");

var app = express()

app.get('/', function(req, res) {
    res.send('Olá mundo!');
})

app.get('/somar/:n1/:n2', function(req, res) {
    res.send('O resultado da soma de ' + req.params.n1 + ' e ' + req.params.n2 + ' é = ' + calculadora.somar(parseInt(req.params.n1), parseInt(req.params.n2)));
})

app.get('/subtrair/:n1/:n2', function(req, res) {
    res.send('O resultado da subtração de ' + req.params.n1 + ' e ' + req.params.n2 + ' é = ' + calculadora.subtrair(parseInt(req.params.n1), parseInt(req.params.n2)));
})

app.get('/multiplicar/:n1/:n2', function(req, res) {
    res.send('O resultado da multiplicação de ' + req.params.n1 + ' e ' + req.params.n2 + ' é = ' + calculadora.multiplicar(parseInt(req.params.n1), parseInt(req.params.n2)));
})

app.get('/dividir/:n1/:n2', function(req, res) {
    res.send('O resultado da divisão de ' + req.params.n1 + ' e ' + req.params.n2 + ' é = ' + calculadora.dividir(parseInt(req.params.n1), parseInt(req.params.n2)));
})

app.get('/fatorial/:n1', function(req, res) {
    res.send('O resultado do fatorial de ' + req.params.n1 + ' é = ' + calculadora.fatorial(parseInt(req.params.n1)));
})

app.listen(8000, function() {
    console.log('Aplicação executando na porta 8000')
})