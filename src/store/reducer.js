import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import  { reducer as homeReducer }  from '../pages/home/store'

// 合并reducer
export default combineReducers({
  header: headerReducer,
  home: homeReducer
})