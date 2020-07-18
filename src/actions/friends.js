import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';

export function fetchFriendsSuccess(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}

export function fetchFriendsFailure(error) {
  return {
    type: FETCH_FRIENDS_FAILURE,
    error,
  };
}

export function fetchUserFriends(userId) {
  return (dispatch) => {
    const url = APIUrls.userFriends(userId);

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('friends data', data);

        if (data.success) {
          dispatch(fetchFriendsSuccess(data.data.friends));
          return;
        }
        dispatch(fetchFriendsFailure(data.message));
      });
  };
}
