import {
  USER_SEARCH_RESULT_SUCCESS,
  USER_SEARCH_RESULT_FAILURE,
} from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';

export function userSearchSuccess(users) {
  return {
    type: USER_SEARCH_RESULT_SUCCESS,
    users,
  };
}

export function userSearchFailure(error) {
  return {
    type: USER_SEARCH_RESULT_FAILURE,
    error,
  };
}

export function userSearch(searchText) {
  return (dispatch) => {
    const url = APIUrls.userSearch(searchText);

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Search data', data);

        if (data.success) {
          dispatch(userSearchSuccess(data.data.users));
          return;
        }
        dispatch(userSearchSuccess([]));
      });
  };
}
