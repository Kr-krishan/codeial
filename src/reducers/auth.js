import { func } from 'prop-types';
import {
  LOGING_START,
  LOGING_SUCCESS,
  LOGING_FAILED,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  isLoggedIn: false,
  inProgress: false,
  error: null,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGING_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGING_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        error: null,
      };
    case LOGING_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };

    default:
      return state;
  }
}
