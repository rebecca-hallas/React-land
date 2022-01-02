const express = require('express')
const beautyDb = require('../db/beauty')
const router = express.Router()

router.get('/Beauty', (req, res) => {
    const beauty = req.query.beauty ? req.query.beauty : 'all'
  
    console.log('beauty: ', beauty)
    beautyDb.generalQuery(beauty)
      .then(result => {
        res.status(200).json(result)
        return null
      })
      .catch(err => console.log(err))
  })

module.exports = router
