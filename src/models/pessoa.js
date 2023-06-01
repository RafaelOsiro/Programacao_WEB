const Sequelize = require('sequelize');
const database = require('../db');

const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altura: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    peso: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
})

module.exports = Pessoa;