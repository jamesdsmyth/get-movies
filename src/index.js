import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/reducers/combinedReducers';
import Container from './js/containers/Container';

import './scss/main.scss';

const Index = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));