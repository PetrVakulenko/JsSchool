import React from 'react';
import { connect } from 'react-redux';
import { isLoading } from '../Loading';
import { getGHProfile } from './store';

const validPrint = (value, fieldName) => (value ? value : <span>{fieldName} not specified</span>);

const showErrorMessage = () => (
  <h2 className="text-danger">
    Something was wrong
  </h2>
);

const showGHProfileCard = ({id, login, avatar_url, name, company, location, public_repos, followers, following, toggleView, bio }) => (
  <div className="col-md-4">
    <div className="card">
      <img
        className="card-img-top"
        src={avatar_url}
        alt={name}
      />
      <div className="card-body">
        <button onClick={toggleView} className="btn btn-link">
          <h4 className="card-title">
            {name}
          </h4>
        </button>
        <h4 className="card-title">
          {login}
        </h4>
        <p>
          {validPrint(company, 'Company')}
        </p>
        <p>
          {validPrint(location, 'Location')}
        </p>
        <h5> Bio:</h5>
        <p>
          {validPrint(bio, 'Bio')}
        </p>
        <h5> Statistics:</h5>
        <p>
          Repositories: {+public_repos}
        </p>
        <p>
          Followers: {+followers}
        </p>
        <p>
          Followings: {+following}
        </p>
      </div>
    </div>
  </div>
);

const GHProfileCard = (profile) => {
  return !profile.login
    ? showErrorMessage()
    : showGHProfileCard(profile);
};

const state2Props = state => ({
  ...getGHProfile(state),
  isLoading: isLoading(state),
});

export default connect(state2Props)(GHProfileCard);
