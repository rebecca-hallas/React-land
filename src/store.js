import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/beautyreducers'
// import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default store
export const dispatch = store.dispatch
export const getState = store.getState