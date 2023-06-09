const Sequelize = require('sequelize');
const database = require('../db');

const Pessoa = database.define('pessoa', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  nome: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  cpf: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true
  },
  data_nascimento: {
    type: Sequelize.DATE,
    allowNull: false
  },
  telefone: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(32),
    allowNull: false,
    unique: true
  },
  endereco: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  cep: {
    type: Sequelize.BIGINT,
    allowNull: false
  }
})

module.exports = Pessoa;