import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_FAILURE,
  GET_CHOCOLATE_SUCCESS,
  GET_CHOCOLATE_DETAILS,
  GET_CHOCOLATE_DETAILS_FAILURE,
  GET_CHOCOLATE_DETAILS_SUCCESS
} from "../actions/actionTypes";
import produce from "immer";
const initialState = { chocolates: [], ChocolateDetails: [], isLoading: false };
export default function chocolateReducer(prevstate = initialState, action) {
  return produce(prevstate, draft => {
    switch (action.type) {
      case GET_CHOCOLATE:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATE_SUCCESS:
        draft.chocolates = action.chocolates;
        break;

      case GET_CHOCOLATE_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      case GET_CHOCOLATE_DETAILS:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATE_DETAILS_SUCCESS:
        draft.ChocolateDetails = action.ChocolateDetails;
        break;
      case GET_CHOCOLATE_DETAILS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    }
  });
}
