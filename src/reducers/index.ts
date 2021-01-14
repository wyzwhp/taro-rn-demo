import { combineReducers } from 'redux'
import counter from './counter'
import globalData from './modules/globalData'
import floor from './modules/floor'
import video from './modules/video'

export default combineReducers({
  counter,
  globalData,
  floor,
  video
})
