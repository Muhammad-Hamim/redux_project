import { FILTER_FEATURE_BOOKS, SEARCH_BOOKS } from "./actions";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FEATURE_BOOKS:
      return {
        ...state,
        status: action.payload,
      };

    case SEARCH_BOOKS:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
