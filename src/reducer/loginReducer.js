import produce from "immer";
import {
  GET_INPUT,
  GET_SUBMIT,
  GET_LOGINSUCCESS,
  GET_LOGINFAILURE
} from "../actions/actionTypes";

const initialtState = {
  email: "",
  password: "",
  isLoading: false,
  isLoginSuccess: false
};

export default function loginReducer(prevState = initialtState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_INPUT:
        console.log(action.fieldName, action.fieldValue);
        draft[action.fieldName] = action.fieldValue;
        break;
      case GET_SUBMIT:
        draft.isLoading = true;
        break;
      case GET_LOGINSUCCESS:
        draft.isLoading = false;
        draft.response = action.response;
        draft.isLoginSuccess = true;
        break;
      case GET_LOGINFAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      default:
        return prevState;
    }
  });
}
