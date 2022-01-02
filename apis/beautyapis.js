import request from 'superagent'
const acceptJsonHeader = 'application/json'
const rootUrl = '/api/v1/Beauty/'

export function editBeauty (beautyId, beauty) {
    return request.patch(rootUrl + beautyId)
      .accept(acceptJsonHeader)
      .send(beauty)
      .then(res => res.body)
  }
  
  export function addBeauty (beauty) {
    return request.post(rootUrl)
      .send(beauty)
  }
  
  export function getAllBeauty (beautyId) {
    return request.get(rootUrl + `/${beautyId}`)
      .then(res => {
        return res.body
      })
  }
  