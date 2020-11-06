/**
 * reducers入口文件
 * combineReducers 
 */
import {combineReducers} from 'redux';
import Wechat from './wecaht'

export default combineReducers({
    wechat: Wechat
})