import { put } from "redux-saga/effects";
import { getSignupSuccess, getSignupFailure } from "../actionCreaters/actionAC";

export function* singupSaga(action) {
  const body = {
    firstName: action.body.firstName,
    lastName: action.body.lastName,
    email: action.body.email,
    password: action.body.password
  };
  console.log("saga", action.body);

  try {
    const submitresponse = yield fetch(`http://localhost:4000/users`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json"
      }
    });
    const postResponse = yield submitresponse.json();
    alert("sigin success");
    yield put(getSignupSuccess(postResponse));
  } catch (err) {
    yield put(getSignupFailure(err));
  }
}
