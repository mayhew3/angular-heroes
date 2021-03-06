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

exports.addHero = function(request, response) {
  let hero = request.body;

  model.Hero.create(hero).then((result) => {
    response.json(result.dataValues);
  }).catch(error => {
    console.error(error);
    response.send({msg: "Connection error " + error});
  })
};

exports.deleteHero = function(request, response) {
  model.Hero.destroy({
    where: {
      id: request.params.hero_id
    }
  }).then(() => {
    response.send({msg: "Success!"});
  }).catch(error => {
    console.log("Deletion error: " + error);
    response.send("Deletion error: " + error);
  });
};

exports.updateHero = function(request, response) {
  let hero = request.body;

  model.Hero.findByPk(hero.id).then(result => {
    result.update(hero).then(() => {
      response.json({msg: "Success!"});
    }).catch(error => {
      console.error(error);
      response.send({msg: "Error updating hero: " + JSON.stringify(hero)})
    });
  }).catch(error => {
    console.error(error);
    response.send({msg: "Error finding hero: " + error});
  });
};
