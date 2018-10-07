import { combineReducers } from 'redux';
// import { createSelector } from 'reselect';

import { getFilterFunc, filterList, get } from './helpers';
import {
  action,
  createReducer,
  mergePayload,
  lookupReducer,
  include,
  exclude,
  domainSelector,
} from '../redux-utils';


const _toggleTodo = action('TODO::TOGGLE');
export const toggleTodo = id => _toggleTodo({ id });
export const saveTodo = action('TODO::SAVE');
export const _deleteTodo = action('TODO::DELETE');
export const deleteTodo = id => _deleteTodo({ id, deleted: true });

export const _restoreTodo = action('TODO::RESTORE');
export const restoreTodo = id => _restoreTodo({ id, deleted: false });

export const setFilter = action('TODO::SET-FILTER');

const initialTodoState = {
  id: null,
  name: '',
  completed: false,
  deleted: false,
}

const todo = createReducer(initialTodoState, {
  [_toggleTodo.type]: state => ({
    ...state, completed: !state.completed,
  }),
  [saveTodo.type]: mergePayload,
  [_deleteTodo.type]: mergePayload,
  [_restoreTodo.type]: mergePayload,
});

const todoLookup = lookupReducer(todo);

const byId = createReducer({}, {
  [_toggleTodo.type]: todoLookup,
  [saveTodo.type]: todoLookup,
  [_deleteTodo.type]: todoLookup,
  [_restoreTodo.type]: todoLookup,
});

const ids = createReducer([], {
  [saveTodo.type]: (state, { payload }) => include(state, payload.id),
});

const filter = createReducer('all', {
  [setFilter.type]: (_, { payload }) => payload,
});

const todos = combineReducers({ byId, ids, filter });

export default todos;

// ------- SELECTORS --------
const createSelector = (...selectors) => {
  const selector = selectors.pop();
  return (...args) => selector(
    ...selectors.map(s => s(...args))
  );
};

export const domain = domainSelector(_ => _.todos);

export const getTodos = createSelector(
  domain,
  ({ ids, deletedIds, byId }) => ids.map(id => byId[id]),
);

export const getFilterValue = createSelector(
  domain,
  get('filter')
);

export const getFilter = createSelector(
  getFilterValue,
  getFilterFunc
);

export const getVisibleTodos = createSelector(
  getTodos,
  getFilter,
  filterList
);
