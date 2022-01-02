const connection = require('./connection')

function updateBeautyById (beautyId, beauty, db = connection) {
    return db('beautyarticles')
      .update(beauty)
      .where('id', '=', beautyId)
  }
  
  function addBeauty (beauty, db = connection) {
    console.log('add a house')
    return db('beautyarticles')
      .insert(beauty)
      .then(ids => {
        beauty.id = ids[0]
        return beauty
      })
  }
  
  function deleteBeautyById (beautyId, db = connection) {
    return db('beautyarticles')
      .del()
      .where('id', '=', beautyId)
  }
  
function listAllBeauty (db = connection) {
    return db('beautyarticles')
}

  module.exports = {
    updateBeautyById,
    addBeauty,
    deleteBeautyById,
    listAllBeauty
  }