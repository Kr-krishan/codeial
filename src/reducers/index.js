import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import profile from './profile';
import friends from './friends';
import search from './search';

// export combine Reducer with all the reducers from single file
export default combineReducers({
  posts,
  auth,
  profile,
  friends,
  search,
});
