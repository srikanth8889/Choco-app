import produce from "immer";
import {
  INPUT_CHANGE,
  SET_ERROR_MESSAGE,
  GET_SIGNUP_SUCCESS,
  GET_SIGNUP,
  GET_SIGNUP_FAILURE
} from "../actions/actionTypes";
const initialState = {
  isLoading: false,
  body: [],
  user: []
};
export default function signupReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.errorMessage = action.message;
        break;
      case GET_SIGNUP:
        draft.isLoading = true;
        draft.body = action.body;
        break;
      case GET_SIGNUP_SUCCESS:
        draft.isLoading = false;
        draft.user = action.user;
        //draft.brandDetail = action.brandDetail;
        break;
      case GET_SIGNUP_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case INPUT_CHANGE:
        draft[action.fieldName] = action.fieldValue;
        break;
      default:
        return prevState;
    }
  });
}
