const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

exports.Hero = sequelize.sequelize.define("hero", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.TEXT
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

