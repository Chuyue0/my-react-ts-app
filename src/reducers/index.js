/**
 * reducers入口文件
 * combineReducers 工具函数，用来简化编写reducer
 */
import {combineReducers} from 'redux';
import Wechat from './wechat'

// ES6对象字面量的定义对象结构
export default combineReducers({
    wechat: Wechat
})