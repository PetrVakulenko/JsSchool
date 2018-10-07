import React from 'react';
import { connect } from 'react-redux';

import { changeName, changeAge, changeStudent } from './store/actions';

const UserForm = ({ name, age, isStudent, changeName, changeAge, changeStudent }) => (
  <form>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="name">User Name</label>
      <div className="col-sm-4">
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => changeName(event.target.value)}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="age">User Age</label>
      <div className="col-sm-1">
        <input
          id="age"
          type="number"
          className="form-control"
          value={age}
          onChange={(event) => changeAge(event.target.value)}
        />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-2 col-form-label"> </div>
      <div className="col-sm-3">
        <div className="form-check">
          <input
            id="is-student"
            type="checkbox"
            className="form-check-input"
            checked={isStudent}
            onChange={(event) => changeStudent(event.target.checked)}
          />
          <label htmlFor="is-student" className="form-check-label">Student</label>
        </div>
      </div>
    </div>
  </form>
);

const getProps = ({ userForm }) => ({ ...userForm });

const handlers = ({
  changeName: changeName,
  changeAge: changeAge,
  changeStudent: changeStudent
});

export default connect(getProps, handlers)(UserForm);
