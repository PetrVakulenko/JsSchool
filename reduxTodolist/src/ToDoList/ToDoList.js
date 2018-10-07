import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';
import AddTodo from './AddTodo';
import {
  toggleTodo,
  restoreTodo,
  deleteTodo,
  setFilter,
  saveTodo,
  getVisibleTodos as getTodos,
  getFilterValue,
} from './store';

const TodoFilter = ({ filter, onFilterChange }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="list-group-item">
        <div className="col-sm-4">
          <select className="form-control" value={filter} onChange={onFilterChange}>
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="not-completed">not completed</option>
            <option value="deleted">deleted</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

const ToDoList = ({ todos, onTodoClick, filter, onFilterChange, onAddTodo, onDeleteTodo, onRestoreTodo }) => (
  <div className="container">
    <TodoFilter
      filter={filter}
      onFilterChange={onFilterChange}
    />
    <div className="row my-3">
      <div className="col-md-12 ">
        <ul className="list-group">
          {todos.map && todos.map(
            todo => (
              <ToDoItem
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onDeleteItem={() => onDeleteTodo(todo.id)}
                onRestoreItem={() => onRestoreTodo(todo.id)}
                filter={filter}
              />
            ))
          }
        </ul>
      </div>
      <div className="col-md-12 my-3">
        <div className="list-group-item">
          <AddTodo
            onAddTodo={onAddTodo}
          />
        </div>
      </div>
    </div>
  </div>
);

const state2Props = state => ({
  todos: getTodos(state),
  filter: getFilterValue(state),
});

const handlers = {
  onTodoClick: id => toggleTodo(id),
  onFilterChange: ({ target }) => setFilter(target.value),
  onAddTodo: todo => saveTodo({ id: v4(), name: todo, completed: false }),
  onDeleteTodo: id => deleteTodo(id),
  onRestoreTodo: id => restoreTodo(id)
};

export default connect(state2Props, handlers)(ToDoList);
