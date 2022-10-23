import { compose, applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);
  console.log('next state:  ', store.getState());
};
const middleWares = [loggerMiddleware];
const composedEnhancer = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composedEnhancer);
export const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware]
});
