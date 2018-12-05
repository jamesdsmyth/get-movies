import "regenerator-runtime/runtime";
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { fetchApiSuccess, fetchApiFailure } from '../actions/actions';

// watching the fetch api call and passing the url to search
function* watchFetchApi(data) {
  yield fetchApi(data);
}

// fetching the api
function* fetchApi(data) {

  const phrase = data.searchPhrase;
  
  try {
    const response = yield axios.get(`http://www.omdbapi.com/?t=${phrase}&apikey=21af3ff2`);
    const data = yield response.data;

    console.log('THE DATA IS HERE', data);

    if(data.Response !== 'False') {
      yield put(fetchApiSuccess(data));
    } else {
      yield put(fetchApiFailure(data));
    }
    
  } catch(error) {
    yield put(fetchApiFailure(error));
  }
}

// single entry point to start all our sagas at once
export default function* rootSaga() {
  yield takeLatest('FETCH_API', watchFetchApi);
}