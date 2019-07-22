import produce from "immer";
import {
  GET_SEARCH,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  chocolates: [],
  searchWord: "",
  searchChocolates: []
};
export default function searchReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    //debugger;
    switch (action.type) {
      case GET_SEARCH:
        draft.searchWord = action.searchWord;
        draft.isLoading = true;
        break;
      case GET_SEARCH_SUCCESS:
        draft.isLoading = false;
        draft.searchChocolates = action.search_success;
        break;
      case GET_SEARCH_FAILURE:
        draft.error = action.error;
        break;
    }
  });
}
