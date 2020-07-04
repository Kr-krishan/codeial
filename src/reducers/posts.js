import { UPDATE_POSTS } from '../actions/actionTypes';

// post reducer with posts actions
export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
