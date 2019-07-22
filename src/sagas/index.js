import { takeLatest, all } from "redux-saga/effects";
import {
  GET_BRANDS,
  GET_BRANDS_DETAILS,
  GET_CHOCOLATE,
  GET_CHOCOLATE_DETAILS,
  GET_SUBMIT,
  GET_SIGNUP,
  GET_SEARCH
} from "../actions/actionTypes";
import { getBrandSaga, getBrandDetailsSaga } from "../sagas/Brandssaga";
import { getChocolateSaga, getChocolateDetailsSaga } from "./Chocolatesaga";
import { loginSaga } from "../sagas/loginsaga";
import { singupSaga } from "./SignUpsaga";
import { searchSaga } from "./searchSaga";
export default function* rootSagaWatcher() {
  yield all([
    takeLatest(GET_SUBMIT, loginSaga),
    takeLatest(GET_BRANDS, getBrandSaga),
    takeLatest(GET_CHOCOLATE, getChocolateSaga),
    takeLatest(GET_CHOCOLATE_DETAILS, getChocolateDetailsSaga),
    takeLatest(GET_BRANDS_DETAILS, getBrandDetailsSaga),
    takeLatest(GET_SIGNUP, singupSaga),
    takeLatest(GET_SEARCH, searchSaga)
  ]);
}
