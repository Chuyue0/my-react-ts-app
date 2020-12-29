/**
 * 项目入口文件
 * 将create出来的store容器当作属性传入到Appcontainer中，作为我们应用的状态容器。
 * 添加 eslint-disable-next-line 忽略下一行，因为报错： ‘'React' was used before it was defined  @typescript-eslint/no-use-before-define’
 */

// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; 原app页面
import * as serviceWorker from './serviceWorker';
import AppContainer from './container/AppContainer';
import createStore from './store/createStore';
const store=createStore();

ReactDOM.render(
  <React.StrictMode>
    <AppContainer store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
