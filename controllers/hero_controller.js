const model = require('./model');

exports.getHeroes = function(request, response) {
  model.Hero.findAll().then(heroes => {
    response.json(heroes);
  })
};

exports.getHero = function(request, response) {
  let hero_id = request.params.hero_id;

  model.Hero.findByPk(hero_id).then(hero => {
    response.json(hero);
  })
};
