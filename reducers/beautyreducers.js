import { SET_BEAUTY } from '../actions/beautyactions'

const beautyReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_BEAUTY:
      return action.beauty
    default:
      return state
  }
}

export default beautyReducer