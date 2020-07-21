import { ADD_COMMENT } from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage, getFormBody } from '../helper/utils';

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
