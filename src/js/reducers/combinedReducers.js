import { createStore, applyMiddleware , combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from '../sagas/sagas';
import { apiReducer } from './apiReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// multiple reducers need to be combined first
const combinedReducers = combineReducers({
  apiReducer
});

// creating the store with the middleware
const store = createStore(
  combinedReducers,
  applyMiddleware(sagaMiddleware, logger)
);

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;