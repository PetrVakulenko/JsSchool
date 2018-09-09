import React from 'react';

const GitHubAccountPreview = ({ login, avatar_url, url, site_admin }) => (
    <div className = "github-preview">
        {avatar_url && <img src={avatar_url} alt="avatar" />}
        <div className="github-preview--right-side">
            {login && <div className="github-preview--github-login">{login}</div>}
            {site_admin && <div className="github-preview--is-admin">admin</div>}
            <div className="clearfix"></div>
            {url && <div className="github-preview--github-link"><a href={url} target="_blank">{url}</a></div>}
        </div>
    </div>
);

export default GitHubAccountPreview;
