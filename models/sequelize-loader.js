'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/practice1'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};