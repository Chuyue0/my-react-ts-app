/**
 * 应用的状态容器store
 * 创建redux的store，eg:写日志中间件
 * 引入了redux-saga，在reducer中定义好类型的操作和saga，不需要定义action函数和引入action中函数，甚值连mapStateToProps函数也不需要调用，
 * 直接使用this.props.dispatch({type:'WATCH_GET_PROJECT'})直接调用，
 * action可以复用
 *
 * createSagaMiddleware 工厂函数
 * applyMiddleware 连接至store
 */
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../saga"; //自定义根rootsaga

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware(); //创建saga中间件
  const middleWare = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWare);

  const enhancers = [middlewareEnhancer];
  const composeEnhancer = compose(...enhancers);

  //创建存储容器mount
  const store = createStore(rootReducer, preloadedState, composeEnhancer);
  sagaMiddleware.run(rootSaga); //启动saga

  return store;
}
