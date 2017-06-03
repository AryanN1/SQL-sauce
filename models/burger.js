var sequelize = require ("sequelize");
var sequelize = new Sequelize("database", "username", "password");
var config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports=db
