import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Timer from './timer/component';
import timer from './timer/reducer';

const store = createStore(timer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Timer updateInterval={100} />
    </div>
  </Provider>,
  document.getElementById('root')
);
