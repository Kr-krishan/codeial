import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  FETCH_USER_PROFILE,
} from '../actions/actionTypes';

const initialProfileState = {
  user: {},
  inProgress: false,
  error: null,
  success: null,
};

export default function profile(state = initialProfileState, action) {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        inProgress: false,
        user: action.user,
        success: true,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };

    case FETCH_USER_PROFILE:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
}
