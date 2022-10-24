import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk
].filter(Boolean);
const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares
});

export const persistor = persistStore(store);
