import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
  GET_BRANDS_DETAILS,
  GET_BRANDS_DETAILS_FAILURE,
  GET_BRANDS_DETAILS_SUCCESS
} from "../actions/actionTypes";
import produce from "immer";
const initialState = { brands: [], BrandDetails: [], isLoading: false };
export default function brandReducer(prevstate = initialState, action) {
  return produce(prevstate, draft => {
    switch (action.type) {
      case GET_BRANDS:
        draft.isLoading = true;
        break;
      case GET_BRANDS_SUCCESS:
        draft.brands = action.brands;
        break;
      case GET_BRANDS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case GET_BRANDS_DETAILS:
        draft.isLoading = true;
        break;
      case GET_BRANDS_DETAILS_SUCCESS:
        draft.BrandDetails = action.BrandDetails;
        break;
      case GET_BRANDS_DETAILS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    }
  });
}
