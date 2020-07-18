import { UPDATE_POSTS, ADD_POST } from './actionTypes';
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
