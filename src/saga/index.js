/**
 * saga入口文件
 * 声明一个Generator函数，使用yield关键词
 * delay工具函数，延迟
 * put(Effect的例子):发送对应的dispatch,触发其action
 * takeEvery辅助函数，每一次dispatch都会触发；监听所有的‘WATCH_GET_PROJECT’action，并匹配到action是执行fetchProject任务。
 */
import { put, takeEvery, delay } from "redux-saga/effects";

export function* fetchProject() {
  yield delay(1000); //延迟1s,    报错啦？？？？？？？
  yield put({ type: "GET_PROJECT" });
}

export default function* rootSaga() {
  yield takeEvery("WATCH_GET_PROJECT", fetchProject);
}
