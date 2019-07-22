import {
  INPUT_CHANGE,
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  SET_ERROR_MESSAGE,
  GET_SIGNUP,
  GET_SIGNUP_SUCCESS,
  GET_SIGNUP_FAILURE,
  GET_BRANDS,
  GET_BRANDS_FAILURE,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_DETAILS,
  GET_BRANDS_DETAILS_FAILURE,
  GET_BRANDS_DETAILS_SUCCESS,
  GET_CHOCOLATE,
  GET_CHOCOLATE_SUCCESS,
  GET_CHOCOLATE_FAILURE,
  GET_CHOCOLATE_DETAILS,
  GET_CHOCOLATE_DETAILS_SUCCESS,
  GET_CHOCOLATE_DETAILS_FAILURE,
  GET_LOGINSUCCESS,
  GET_LOGINFAILURE,
  GET_INPUT,
  GET_SUBMIT,
  GET_SEARCH,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_VALUE
} from "../actions/actionTypes";
//SEARCH
export function getsearch(searchWord) {
  return { type: GET_SEARCH, searchWord };
}

export function getsearchsuccess(search_success) {
  return { type: GET_SEARCH_SUCCESS, search_success };
}
export function getsearchfailure(error) {
  return { type: GET_SEARCH_FAILURE, error };
}

// export function getvalues(searchWord) {
//   return { type: GET_SEARCH_VALUE, searchWord };
// }
//signup
export function getSignup(body) {
  return { type: GET_SIGNUP, body };
}

export function getSignupSuccess(user) {
  return { type: GET_SIGNUP_SUCCESS, user };
}

export function getSignupFailure(error) {
  return { type: GET_SIGNUP_FAILURE, error };
}

//ober
export function input_change(fieldName, fieldValue) {
  return { type: INPUT_CHANGE, fieldName, fieldValue };
}
export function set_error_msg(message) {
  return { type: SET_ERROR_MESSAGE, message };
}

// export function submit_form(payload) {
//   return { type: FORM_SUBMIT, payload };
// }

// export function form_submit_success(users) {
//   return { type: FORM_SUBMIT_SUCCESS, users };
// }

// export function form_submit_failure(error) {
//   return { type: FORM_SUBMIT_FAILURE, error };
// }

// export function get_users() {
//   return { type: GET_USERS };
// }

// export function get_users_success(users) {
//   return { type: GET_USERS_SUCCESS, users };
// }

// export function get_users_failure(error) {
//   return { type: GET_USERS_FAILURE, error };
// }

// export function login_form(users) {
//   return { type: LOGIN, users };
// }

// export function login_form_success(chocolates, types, brands) {
//   return { type: LOGIN_SUCCESS, chocolates, types, brands };
// }

// export function login_form_failure(error) {
//   return { type: LOGIN_FAILURE, error };
//}

//BRANDS
export function getBrands() {
  return { type: GET_BRANDS };
}

export function getBrandSuccess(brands) {
  return { type: GET_BRANDS_SUCCESS, brands };
}

export function getBrandFailure(error) {
  return { type: GET_BRANDS_FAILURE, error };
}

export function getbranddetails(id) {
  return { type: GET_BRANDS_DETAILS, id };
}

export function getbranddetailssuccess(BrandDetails) {
  return { type: GET_BRANDS_DETAILS_SUCCESS, BrandDetails };
}

export function getbranddetailsfailure(error) {
  return { type: GET_BRANDS_DETAILS_FAILURE, error };
}

//chocolate
export function getchocolate() {
  return { type: GET_CHOCOLATE };
}

export function getchocolateSuccess(chocolates) {
  return { type: GET_CHOCOLATE_SUCCESS, chocolates };
}

export function getchocolateFailure(error) {
  return { type: GET_CHOCOLATE_FAILURE, error };
}

export function getchocolatedetails(id) {
  return { type: GET_CHOCOLATE_DETAILS, id };
}

export function getchocolatedetailssuccess(ChocolateDetails) {
  return { type: GET_CHOCOLATE_DETAILS_SUCCESS, ChocolateDetails };
}

export function getChocolatedetailsfailure(error) {
  return { type: GET_CHOCOLATE_DETAILS_FAILURE, error };
}
//login
export function getInput(fieldName, fieldValue) {
  return { type: GET_INPUT, fieldName, fieldValue };
}

export function getSubmit(email, password) {
  console.log(">>", email, password);
  return { type: GET_SUBMIT, email, password };
}
export function getLoginSuccess(response) {
  return { type: GET_LOGINSUCCESS, response };
}

export function getLoginFailure(error) {
  return { type: GET_LOGINFAILURE, error };
}
///search
