import React from 'react';
import { connect } from 'react-redux';

const UserInfo = ({ name, age, isStudent }) => (
  <div className="row">
    <div className="col-sm-6">
      <samp>
        {isStudent ? 'Student ' : ''}
        {name}
        {' is '}
        {age}
        {' years old.'}
      </samp>
    </div>
  </div>
);

const getProps = ({ userForm}) => ({ ...userForm });

export default connect(getProps)(UserInfo);
