import React from 'react';

const btnClass = (status) => (
    status ? 'btn-primary' : 'btn-danger'
);

const ToDoItem = ({ id, name, completed, deleted, onClick, onDeleteItem, onRestoreItem, filter }) => (
  filter !== 'deleted' && deleted ? '' :
  <li className="list-group-item">
    <div className="form-check d-flex justify-content-between align-items-center">
      <input
        type="checkbox"
        className="form-check-input"
        id={`checkbox-${id}`}
        onChange={onClick}
        checked={completed}
      />
      <label className="form-check-label" htmlFor={`checkbox-${id}`}>
        {
          deleted ?
            <del>{name}</del> :
            name
        }
      </label>
      <button className={`btn btn-sm ${btnClass(deleted)}`} onClick={deleted ? onRestoreItem : onDeleteItem}>
        { deleted ? 'Restore' : 'X' }
      </button>
    </div>
  </li>
);

export default ToDoItem;
