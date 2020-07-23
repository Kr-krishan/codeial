import { USER_SEARCH_RESULT_SUCCESS } from '../actions/actionTypes';

const initialSearchState = {
  results: [],
};

export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case USER_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        results: action.users,
      };
    default:
      return state;
  }
}
