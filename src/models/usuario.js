const Sequelize = require('sequelize');
const database = require('../db');

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
    allowNull: false
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

module.exports = Usuario;