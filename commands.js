const db = require('./server/db/db')

module.exports = {
    listArticles,
    printArticles
}

function listArticles () {
    return db.getArticles()
      .then(beautyarticles => {
        printArticles(beautyarticles)
        return null
      })
      .catch(err => {
        logError(err)
      })
      .finally(() => {
        db.close()
      })
  }

function printArticles (articles) {
    articles.forEach(article => {
      console.info(`${article.id}: ${article.paragraphs}`)
    })
  }
