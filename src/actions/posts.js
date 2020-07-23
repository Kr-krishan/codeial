import {
  UPDATE_POSTS,
  ADD_POST,
  UPDATE_POST_LIKES,
  UPDATE_COMMENT_LIKES,
  ADD_COMMENT,
} from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { getFormBody } from '../helper/utils';

// fetching post from api
export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

// action to update posts
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

// add post
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

// create post
export function createPost(content) {
  return (dispatch) => {
    const url = APIUrls.createPost();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('create Post', data);

        if (data.success) {
          dispatch(addPost(data.data.post));
          return;
        }
        // dispatch();
      });
  };
}

// comments
export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}

export function createComment(content, postId) {
  return (dispatch) => {
    const url = APIUrls.createComment();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({
        post_id: postId,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('create Comment', data);

        if (data.success) {
          dispatch(addComment(data.data.comment, postId));
          return;
        }
        // dispatch();
      });
  };
}

// post like
export function addLikeToPost(postId, userId) {
  return {
    type: UPDATE_POST_LIKES,
    postId,
    userId,
  };
}

// comments like
export function addLikeToComment(commentId, userId, postId) {
  return {
    type: UPDATE_COMMENT_LIKES,
    commentId,
    userId,
    postId,
  };
}

export function addLikes(id, likeType, userId, postId) {
  return (dispatch) => {
    const url = APIUrls.toggleLike(id, likeType);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Like data', data);

        if (data.success) {
          if (likeType === 'Post') {
            dispatch(addLikeToPost(id, userId));
          } else {
            dispatch(addLikeToComment(id, userId, postId));
          }
        }
        // dispatch();
      });
  };
}
