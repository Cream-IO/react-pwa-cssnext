import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, history } from './configureStore';
import App from './components/App/App';

const { persistor, configStore } = configure();
const target = document.querySelector('#root');

render(
  <div>
    <Provider store={configStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </div>,
  target,
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/App/App').default;
    render(
      <Provider store={configStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <NextApp />
          </Router>
        </PersistGate>
      </Provider>,
      target,
    );
  });
  window.store = configStore;
}
