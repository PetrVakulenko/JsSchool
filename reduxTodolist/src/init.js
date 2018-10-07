import { v4 } from 'uuid';
import { saveTodo } from './ToDoList';
import { compose } from './redux-utils';
import todos from './todos';

const addId = item => ({ ...item, id: v4()});
const addDeleted = item => ({ ...item, deleted: false });

export const initTodos = ({ dispatch }) => todos.map(
  compose(
    dispatch,
    saveTodo,
    addId,
    addDeleted
  )
);
