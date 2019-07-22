import { put } from "redux-saga/effects";

import {
  getBrandFailure,
  getBrandSuccess,
  getbranddetailsfailure,
  getbranddetailssuccess
} from "../actionCreaters/actionAC";

export function* getBrandSaga() {
  try {
    const BrandsResponse = yield fetch("http://localhost:4000/brands");
    //alert(BrandsResponse);
    const brands = yield BrandsResponse.json();
    yield put(getBrandSuccess(brands));
  } catch (error) {
    yield put(getBrandFailure(error));
  }
}
export function* getBrandDetailsSaga(action) {
  try {
    const BranddetailsResponse = yield fetch(
      `http://localhost:4000/chocolates?brandId=${action.id}`
    );
    const branddetails = yield BranddetailsResponse.json();
    yield put(getbranddetailssuccess(branddetails));
  } catch (error) {
    yield put(getbranddetailsfailure(error));
  }
}
