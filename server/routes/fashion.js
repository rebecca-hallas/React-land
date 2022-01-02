const express = require('express')
const fashionDb = require('../db/fashion')
const router = express.Router()

router.get('/Fashion', (req, res) => {
    const fashion = req.query.fashion ? req.query.fashion : 'all'
  
    console.log('fashion: ', fashion)
    fashionDb.generalQuery(fashion)
      .then(result => {
        res.status(200).json(result)
        return null
      })
      .catch(err => console.log(err))
  })

module.exports = router
