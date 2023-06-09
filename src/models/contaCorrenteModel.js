const Sequelize = require('sequelize');
const database = require('../db');
const Movimento = require('./movimentoModel');

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
  data_abertura: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  saldo: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

ContaCorrente.hasMany(Movimento, {
  foreignKey: 'conta_corrente_id',
  sourceKey: 'id'
});

module.exports = ContaCorrente;