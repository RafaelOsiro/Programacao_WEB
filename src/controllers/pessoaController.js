const Pessoa = require('../models/pessoa')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarPessoa(req, res){
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.render("pessoa/cadastrar.html", {pessoa});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", {erro});
    })
}

function listarView(req, res){
    Pessoa.findAll().then((pessoas)=>{
        res.render("pessoa/listar.html", {pessoas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function(pessoa){
        res.render("pessoa/editar.html", {pessoa, "pessoaId": req.params.id});
    })
}

function editarPessoa(req, res) {
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pessoa.update(
        pessoa,
        {
        where: {
            id: req.body.id,
        },
        }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });
}

function deletarPessoa(req, res) {
    
    Pessoa.destroy({
        where: {
            id: req.body.pessoaId
        }
    }).then(numDeleted => {
        Pessoa.findAll().then((pessoas) => {
            res.render("pessoa/listar.html", {pessoas});
        }).catch((err) => {
            console.log("Erro ao listar os usuários. ", err);
            let erro = err
            res.render("pessoa/listar.html", {erro});
        })
    }).catch(err => {
        console.log("Erro ao excluir o usuário. ", err);
    })
}

module.exports =  {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    deletarPessoa
};