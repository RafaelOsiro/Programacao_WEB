const Pessoa = require('../models/pessoaModel');
const Usuario = require('../models/usuarioModel');

function cadastrarPessoaView(req, res) {
  res.render("cadastrarPessoa/cadastrarPessoa.html", {
    pessoa: null,
    erro: null
  });
}

async function cadastrarPessoaUsuario(req, res) {
  const {
    nome,
    cpf,
    data_nascimento,
    telefone,
    endereco,
    cep,
    email,
    senha,
    confirmar_senha
  } = req.body;

  try {
    const pessoaExists = await Pessoa.findOne({
      where: { cpf }
    });

    if (pessoaExists) {
      return res.render("cadastrarPessoa/cadastrarPessoa.html", {
        pessoa: null,
        erro: "CPF já cadastrado"
      });
    }

    const usuarioExists = await Usuario.findOne({
      where: { email }
    });

    if (usuarioExists) {
      return res.render("cadastrarPessoa/cadastrarPessoa.html", {
        pessoa: null,
        erro: "E-mail já cadastrado"
      });
    }

    if (senha !== confirmar_senha) {
      return res.render("cadastrarPessoa/cadastrarPessoa.html", {
        pessoa: null,
        erro: "A senha e a confirmação de senha não são iguais"
      });
    }

    const novaPessoa = await Pessoa.create({
      nome,
      cpf,
      data_nascimento,
      telefone,
      endereco,
      cep
    });

    const novoUsuario = await Usuario.create({
      pessoa_id: novaPessoa.id,
      email,
      senha: senha
    });

    res.render("cadastrarPessoa/cadastrarPessoa.html", {
      pessoa: { result: "Cadastro realizado com sucesso" },
      erro: null
    });
  } catch (error) {
    console.error("Erro ao cadastrar pessoa e usuário:", error);
    res.render("cadastrarPessoa/cadastrarPessoa.html", {
      pessoa: null,
      erro: "Erro ao cadastrar pessoa e usuário"
    });
  }
}

module.exports = {
  cadastrarPessoaView,
  cadastrarPessoaUsuario
};
