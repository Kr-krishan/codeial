// to export all the action types from a single file

export const UPDATE_POSTS = 'UPDATE_POSTS';

//login actions

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

//signup actions

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOG_OUT = 'LOG_OUT';

// clear states or unmount
export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

// edit logged in user profile
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

// post user profile
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

// friends
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

//add friends
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

// create post
export const ADD_POST = 'ADD_POST';

// create comment
export const ADD_COMMENT = 'ADD_COMMENT';

// likes
export const UPDATE_POST_LIKES = 'UPDATE_POST_LIKES';
export const UPDATE_COMMENT_LIKES = 'UPDATE_COMMENT_LIKES';

// search
export const USER_SEARCH_RESULT_SUCCESS = 'USER_SEARCH_RESULT_SUCCESS';
export const USER_SEARCH_RESULT_FAILURE = 'USER_SEARCH_RESULT_FAILURE';
