import { LOGIN_START } from './actionTypes';
import { ApIUrls } from '../helper/urls';
import { getFormBody } from '../helper/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = ApIUrls.login();
    // fetch method is generally gets data but here for login we need to post so
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', //users/login?email=k@k.com&password=1 (the encoded url will look like this)
      },
      // method to convert (email and pass) in encoded form (above)
      body: getFormBody({ email, password }),
    });
  };
}
