
import {combineReducers} from 'redux';

import posts from './posts';

// export combine Reducer with all the reducers from single file
export default combineReducers({
    posts,
})
