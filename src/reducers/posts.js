import { UPDATE_POSTS, ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

// post reducer with posts actions
export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;

    case ADD_POST:
      return [action.post, ...state];

    case ADD_COMMENT:
      const newPostArray = state.map((post) => {
        if (post._id === action.postId) {
          // post.comments = [action.comment, ...state];
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }
        return post;
      });
      return newPostArray;

    default:
      return state;
  }
}
