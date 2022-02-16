const db = require("./connection.js");

const movie = db.define("movie", {
  name: {
    type: db.Sequelize.STRING,
  },
  release_year: {
    type: db.Sequelize.INTEGER,
  },
  genre: {
    type: db.Sequelize.STRING,
  },
  picture: {
    type: db.Sequelize.STRING(1234),
  },
  likes : {
    type: db.Sequelize.INTEGER,
  },
  description: {
    type: db.Sequelize.STRING,
  }
},{
  timestamps: false
});

module.exports = movie;
