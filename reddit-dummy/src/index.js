import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PostApp from '../src/components/PostApp';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <div>
    <PostApp />
  </div>
  </Provider>,
  document.getElementById('root'),
);