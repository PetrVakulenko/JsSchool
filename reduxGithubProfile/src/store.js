import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducers } from './GHProfileCard';
import loading from './Loading';
// import { loadGHProfile } from './GHProfileCard/load';
import { loadGHProfile } from './GHProfileCard/thunks';
import promiseMiddleware from './promise-middleware';
import thunkMiddleware from './thunk-middleware';


export const store = createStore(
  combineReducers({ ...reducers, ...loading }),
  undefined,
  applyMiddleware(thunkMiddleware, promiseMiddleware, logger)
);

const baseUrl = 'https://api.github.com/users/';

const urlParts = document.location.pathname.split('/');

const username = urlParts.slice(-1).pop() !== ''
    ? urlParts.slice(-1).pop()
    : 'PetrVakulenko1';

store.dispatch(
  loadGHProfile(baseUrl + username)
);

// loadGHProfile('https://www.googleapis.com/books/v1/volumes/dle2BgAAQBAJ')
//   .then(store.dispatch);
