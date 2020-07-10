import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS } from './actionTypes';
import { SIGNUP_START, SIGNUP_FAILED, SIGNUP_SUCCESS } from './actionTypes';
import { APIUrls } from '../helper/urls';
import { getFormBody } from '../helper/utils';

// login
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

export function loginSuccess(user) {
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
          localStorage.setItem('token', data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

// signup
export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signup(name, email, password, confirmPassword) {
  // console.log('username', username);
  // console.log('email', email);
  // console.log('password', password);
  // console.log('confirm', confirmPassword);
  return (dispatch) => {
    dispatch(startSignup());
    console.log('hello');
    const url = APIUrls.signup();
    console.log(url);
    // fetch method is generally gets data but here for login we need to post so
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        name,
        email,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('signup data', data);

        if (data.success) {
          // dispatch
          console.log('hello');
          // localStorage.setItem('token', data.data.token);
          dispatch(signupSuccess(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}
