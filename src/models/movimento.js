const Sequelize = require('sequelize');
const database = require('../db');

const Movimento = database.define('movimento', {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  conta_corrente_id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  tipo: {
    type: Sequelize.CHAR(1),
    allowNull: false
  },
  data_movimento: {
    type: Sequelize.DATE,
    allowNull: false
  },
  valor: {
    type: Sequelize.DOUBLE.UNSIGNED,
    allowNull: false
  },
  conta_corrente_origem: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  conta_corrente_destino: {
    type: Sequelize.BIGINT,
    allowNull: false
  }
})