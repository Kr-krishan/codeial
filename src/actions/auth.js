import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS } from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getFormBody } from '../helper/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSucces(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    // fetch method is generally gets data but here for login we need to post so
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', //users/login?email=k@k.com&password=1 (the encoded url will look like this)
      },
      // method to convert (email and pass) in encoded form (above)
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);

        if (data.success) {
          // dispatch
          // dispatch(loginSuccess());
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
