const Sequelize = require('sequelize');
module.exports = new Sequelize('d2vts73s2gvpru', 'jzrtvjwhmxinrd', 'db7f8f396c378ce53d07dacee3e73e20c89206dfcebd2335bebb73434a4af76c', {
  host: 'ec2-23-23-241-119.compute-1.amazonaws.com',
  dialect: 'jzrtvjwhmxinrd',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});