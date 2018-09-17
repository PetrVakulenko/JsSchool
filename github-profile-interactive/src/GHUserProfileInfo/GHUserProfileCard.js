import React from 'react';

const validPrint = (value, fieldName) => (value ? value : <span>{fieldName} not specified</span>);

const GHUserProfileCard = ({ avatar_url, name, login, company, location, bio, public_repos, followers, following, toggleView }) => (
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

export default GHUserProfileCard;
