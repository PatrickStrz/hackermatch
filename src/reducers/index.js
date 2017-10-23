import { combineReducers } from 'redux'
import auth from './auth-reducer'
import editor from './editor-reducer'
import alerts from './alert-reducer'

const appRootReducer = combineReducers({
  alerts,
  auth,
  editor,
})

export default appRootReducer
