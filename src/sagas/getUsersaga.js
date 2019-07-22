import { put } from "redux-saga/effects";

import {
  get_users_failure,
  get_users_success
} from "../actionCreaters/actionAC";

export function* getUsersSaga() {
  try {
    const userResponse = yield fetch("http://localhost:4000/users");
    const users = yield userResponse.json();
    yield put(get_users_success(users));
  } catch (error) {
    yield put(get_users_failure(error));
  }
}
