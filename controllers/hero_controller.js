const Sequelize = require('sequelize');
let config = process.env.DATABASE_URL;
const sequelize = new Sequelize(config, {
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const Hero = sequelize.define("hero", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.TEXT
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

exports.getHeroes = function(request, response) {
  Hero.findAll().then(heroes => {
    response.json(heroes);
  })
};
