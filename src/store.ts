import { combineReducers, createStore, Action } from 'redux'

const derp = (_state = { }, _action: Action) => ({

})

const reducers = combineReducers({ derp })
const store = createStore(reducers)

export default store
