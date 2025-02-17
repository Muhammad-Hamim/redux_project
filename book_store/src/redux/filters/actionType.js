import { FILTER_FEATURE_BOOKS, SEARCH_BOOKS } from "./actions";

export const filterFeaturedBooks = (status) => {
  return { type: FILTER_FEATURE_BOOKS, payload: status };
};

export const searchBooks = (searchText) => {
  return { type: SEARCH_BOOKS, payload: searchText };
};
