import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import axiosMiddleware from 'redux-axios-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import rootReducer from './reducers';
import { client, options } from './helpers/api';

export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage: localForage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  thunk,
  axiosMiddleware(client, options),
  routerMiddleware(history),
];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware)(createStore));

export function configure(initialState) {
  const configStore = createStoreWithMiddleware(
    persistedReducer,
    initialState,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  const persistor = persistStore(configStore);

  if (module.hot) {
    module.hot.accept(() => {
      configStore.replaceReducer(rootReducer);
    });
  }
  return { configStore, persistor };
}
