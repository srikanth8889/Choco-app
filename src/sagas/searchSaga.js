import { put } from "redux-saga/effects";
import { getsearchfailure, getsearchsuccess } from "../actionCreaters/actionAC";

export function* searchSaga(action) {
  try {
    const seacrchResponse = yield fetch(
      `http://localhost:4000/chocolates?q=${action.searchWord}`
    );
    const choc = yield seacrchResponse.json();
    yield put(getsearchsuccess(choc));
  } catch (err) {
    yield put(getsearchfailure(err));
  }
}
