<pre>
UNIVERSIDADE CATÓLICA DE BRASÍLIA
CURSO: BACHAREL EM CIÊNCIAS DA COMPUTAÇÃO
DISCIPLINA: PROGRAMAÇÃO WEB
DOCENTE: ESP. JOÃO PEDRO MACLEURE NUNES DOS SANTOS
DISCENTE: RAFAEL RIKI OGAWA OSIRO
</pre>


# PROJETO FINAL DE DISCIPLINA
## Instruções
<p style="text-align: justify">
 Descrição de projeto
  <ol>
      <li>Contexto <br> O desenvolvimento web se caracteriza pelo uso de tecnologias “frontend” e “backend” para
realizar interações entre usuários e aplicações por meio da arquitetura cliente-servidor. Ao longo da
disciplina, foram apresentadas ferramentas para tratamento de requisição e resposta, acesso a banco
de dados e controle de sessão, permitindo a codificação completa de uma aplicação web.</li>
    <li>Descrição do projeto <br> O projeto consiste na implementação das funcionalidades básicas para funcionamento de
uma simples conta corrente. A saber: manter cadastro de pessoa, manter cadastro de usuário (login),
manter cadastro de conta corrente e manter movimento. O verbo manter diz respeito às
funcionalidades de cadastrar, consultar, atualizar e deletar (CRUD).</li>
    <li>Modelo de dados <br> <img src="https://github.com/RafaelOsiro/Programacao_WEB/assets/79678821/7f9f5413-b6da-4d1f-9c54-cc8713345b7a" />
    </li>
    <li>Requisitos <br> O sistema proposto deve atender às seguintes funcionalidades:
      <ol>
        <li>Apresentar tela para cadastro de Pessoa e Usuario (tela única)</li>
        <li>Apresentar tela de login (email/senha)</li>
        <li>Apresentar tela para cadastro de Conta Corrente</li>
        <li>Apresentar tela para seleção de Conta Corrente após login</li>
        <li>Apresentar tela para consulta de saldo da Conta Corrente</li>
        <li>Apresentar tela para consulta de histórico de movimentos (data inicial – data final);</li>
        <li>Apresentar tela para cadastrar movimento (Realizar transferência)</li>
        <li>Adicionar tela para depósito: informar valor e conta destino. Não exige conta de
origem. Deverá gerar um movimento de crédito na conta destino, com observação "DEPOSITO"</li>
      </ol>
    </li>
  </ol>
</p>

<p>Os atributos cpf e e-mail da entidade Pessoa devem ser únicos.</p>
<p>O cadastro de usuário deve ser vinculado a uma pessoa. Cada pessoa pode ter somente um
cadastro de usuário.</p>
<p>Cada conta corrente deve ser vinculada a um usuário. Um usuário pode ter mais de uma
conta corrente.</p>
<p>Cada movimento deve estar vinculado a uma conta corrente. Os tipos de movimento são “C”
para crédito (quando uma conta RECEBE uma transferência) e “D” para débito (quando uma conta
ENVIA uma transferência).</p>
<p>A conta corrente não pode ter saldo negativo. Ou seja, ao realizar uma transferência, deve
ser verificado a existência de saldo suficiente. Em caso negativo, deve ser apresentada mensagem
de erro ao usuário.</p>
<p>Ao realizar uma transferência, deve-se verificar a existência da conta destino. Em caso
negativo, deve ser apresentada mensagem de erro ao usuário.</p>
<p>Ao realizar uma transferência, devem ser cadastrados dois movimentos: crédito na conta
corrente destino (preencher atributo contacorrente_origem) e débito na conta corrente origem
(preencher atributo contacorrente_destino).</p>



## Tecnologias usadas

<div style="display: flex; flex-direction: column;">
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="HTML5" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
    HTML 5
  </div><br>
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg">
    Bootstrap
  </div><br>
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
    Express - 4.18.2
  </div>
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://raw.githubusercontent.com/bryanburgers/node-mustache-express/106558875fd69d55106227706ca30c9795111aab/img/logo.svg" />
    Mustache Express - 1.17.3
  </div>
<div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
    SQLite 3 - 5.1.6
  </div>
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
    Sequelize - 6.31.1
  </div>
  <div style="display: flex; flex-direction: column;">
    <img align="center" alt="CSS3" height="40" width="40" src="https://github.com/RafaelOsiro/Programacao_WEB/assets/79678821/45c139eb-22b1-45b8-aa9f-e3b2a9553dd0" />
    Express Session - 1.17.3
  </div>
</div>

<br>
<br>

## Instalação

Use o node package manager [npm](https://www.npmjs.com/) para instalar as dependências.


```bash
npm install
```

## Uso

Inicilize a aplicação usando o node.js

```bash
node index.js
```
