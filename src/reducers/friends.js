import {
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from '../actions/actionTypes';

const initialFriendsState = [];

export default function friends(state = initialFriendsState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];
    case FETCH_FRIENDS_FAILURE:
      return action.error;
    default:
      return state;
  }
}
