const config = require('./knexfile').development
const database = require('knex')(config)

module.exports = {
    getArticles,
    close
  }

function getArticles (db = database) {
    return db('beautyarticles').select()
}

function close (db = database) {
    db.destroy()
  }