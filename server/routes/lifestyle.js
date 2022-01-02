const express = require('express')
const lifestyleDb = require('../db/lifestyle')
const router = express.Router()

router.get('/Lifestyle', (req, res) => {
    // const lifestyle = req.query.lifestyle ? req.query.lifestyle : 'all'
  
    // console.log('lifestyle: ', lifestyle)
    // lifestyleDb.generalQuery(lifestyle)
    //   .then(result => {
    //     res.status(200).json(result)
    //     return null
    //   })
    //   .catch(err => console.log(err))
  })


module.exports = router
