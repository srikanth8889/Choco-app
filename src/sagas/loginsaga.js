import { put } from "redux-saga/effects";
import { getLoginSuccess, getLoginFailure } from "../actionCreaters/actionAC";

export function* loginSaga(action) {
  try {
    // alert("loginSaga");
    const email = action.email;
    const password = action.password;
    console.log("From saga", email, password);
    // debugger;
    let userResponse = yield fetch(
      `http://localhost:4000/users/?email=${email}`
    );
    let [user] = yield userResponse.json();
    console.log("///", user);
    if (user != undefined) {
      if (user !== undefined && user.password === password) {
        alert("loged in");
      } else if (user.password != password) {
        alert("enter corret password ");
      }
    } else {
      alert("enter corect mail");
    }

    yield put(getLoginSuccess(user));
  } catch (err) {
    yield put(getLoginFailure(err));
  }
}

// import { put } from "redux-saga/effects";

// import {
//   login_form_failure,
//   login_form_success
// } from "../actionCreaters/actionAC";

// export function* loginSaga() {
//   try {
//     const chocolateResponse = yield fetch("http://localhost:4000/chocolates");
//     const chocolates = yield chocolateResponse.json();

//     const typesResponse = yield fetch("http://localhost:4000/types");
//     const types = yield typesResponse.json();

//     const brandsResponse = yield fetch("http://localhost:4000/brands");
//     const brands = yield brandsResponse.json();

//     yield put(login_form_success(chocolates, types, brands));
//   } catch (err) {
//     yield put(login_form_failure(err));
//   }
// }
