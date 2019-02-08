const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    max: 10,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://docs.sequelizejs.com/manual/asset/logo-small.png',
  },
});
