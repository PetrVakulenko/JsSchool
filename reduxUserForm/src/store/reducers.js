import { combineReducers } from 'redux';
import { update } from './actions';

export const mergePayload = (state, { payload }) => ({
  ...state, ...payload,
});

const callReducer = (reducer, state, action) => (
  typeof reducer === 'function'
    ? reducer(state, action)
    : state
);

export const createReducer = (initialState, reducers) => (
  (state = initialState, action) => callReducer(
    reducers[action.type], state, action
  )
);

const initialState = {
  name: 'Petr',
  age: 27,
  isStudent: true,
};

const userForm = createReducer(initialState, {
  [update.type]: mergePayload
});

export const userFormApp = combineReducers({
  userForm
});
