const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = {

  Hero: sequelize.sequelize.define("hero", {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.TEXT
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

};
