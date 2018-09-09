import React from 'react';

const validPrint = (value) => (value ? value : <span>Not specified</span>);

const GitHubAccountPreview = ({ avatar_url, name, login, company, location, public_repos, followers, following }) => (
    <div className = "github-preview">
        {avatar_url && <img src={avatar_url} alt="avatar" />}
        <div className="github-preview--github-name">
            {name}
        </div>
        <div className="github-preview--github-login">
            {login}
        </div>
        <div className="github-preview--github-company">
            Company: {validPrint(company)}
        </div>
        <div className="github-preview--github-location">
            Location: {validPrint(location)}
        </div>
        <div className="github-preview--statistics">
            Statistics:
        </div>
        <div className="github-preview--statistics-data">
            Repositories: {+public_repos}
        </div>
        <div className="github-preview--statistics-data">
            Followers: {+followers}
        </div>
        <div className="github-preview--statistics-data">
            Following: {+following}
        </div>
    </div>
);

export default GitHubAccountPreview;
