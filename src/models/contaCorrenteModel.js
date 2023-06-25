const Sequelize = require('sequelize');
const database = require('../db');
const Usuario = require('./usuarioModel');

const ContaCorrente = database.define('conta_corrente', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  usuario_id: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  numero: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_abertura: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  saldo: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

ContaCorrente.belongsTo(Usuario, {
  foreignKey: 'usuario_id',
  allowNull: false
});

module.exports = ContaCorrente;