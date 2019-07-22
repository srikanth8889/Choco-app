import { put } from "redux-saga/effects";

import {
  getchocolateSuccess,
  getchocolateFailure,
  getChocolatedetailsfailure,
  getchocolatedetailssuccess
} from "../actionCreaters/actionAC";

export function* getChocolateSaga() {
  try {
    const ChocolateResponse = yield fetch("http://localhost:4000/chocolates");
    const chocolates = yield ChocolateResponse.json();
    yield put(getchocolateSuccess(chocolates));
  } catch (error) {
    yield put(getchocolateFailure(error));
  }
}

export function* getChocolateDetailsSaga(action) {
  try {
    const ChocolatedetailsResponse = yield fetch(
      `http://localhost:4000/chocolates/${action.id}`
    );
    const chocolatedetails = yield ChocolatedetailsResponse.json();
    console.log("response**********", chocolatedetails);
    yield put(getchocolatedetailssuccess(chocolatedetails));
  } catch (error) {
    yield put(getChocolatedetailsfailure(error));
  }
}
