import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// () => undefined를 두 번째 파라미터로 넣어 준다..
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초 기다림.
  yield put(increase()); // 특정 액션을 디스패치
}

function* decreaseSaga() {
  yield delay(1000); // 1초 기다림.
  yield put(decrease()); // 특정 액션을 디스패치
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중인 작업이 있다면 취소 처리 후 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 1초 뒤 increase or decrease 함수를 디스패치함
// export const increaseAsync = () => dispatch => {
//   setTimeout( () => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => dispatch => {
//   setTimeout( () => {
//     dispatch(decrease());
//   }, 1000);
// };

const initialState = 0; //상태는 꼭 객체일 필요가 없다.

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
