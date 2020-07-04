import { UPDATE_POSTS } from './actionTypes';
import { APIUrls } from '../helper/urls';

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
