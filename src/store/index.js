import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from '../reducers/index';
import logger from 'redux-logger';

let store;

// creating store with middlewares
export function configureStore() {
    store=createStore(reducer,applyMiddleware(thunk,logger));

    return store;
}