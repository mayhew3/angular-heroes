const db = require('./database_util');

exports.getHeroes = function(request, response) {
  console.log("Getting list of heroes...");

  let sql = "SELECT * " +
    "FROM hero ";

  return db.findAll(response);
};
