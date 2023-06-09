const Sequelize = require('sequelize');
const database = require('../db');
const Pessoa = require('./pessoaModel');
const ContaCorrente = require('./contaCorrenteModel');

const Usuario = database.define('usuario', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  pessoa_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    foreignKey: true
  },
  email: {
    type: Sequelize.STRING(32),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Usuario.belongsTo(Pessoa, {
  foreignKey: 'pessoa_id',
  targetKey: 'id'
});

Usuario.hasMany(ContaCorrente, {
  foreignKey: 'usuario_id',
  sourceKey: 'id'
});

module.exports = Usuario;