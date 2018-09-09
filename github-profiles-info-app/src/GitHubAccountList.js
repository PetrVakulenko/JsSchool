import React from 'react';
import GitHubAccountPreview from './GitHubAccountPreview';

import GHAccountJson1 from './profiles.json';

const profiles = [
    GHAccountJson1,
];

const GitHubAccountList = () => profiles.map(
    profile => (
        <GitHubAccountPreview
            key={profile.login}
            avatar_url={profile.avatar_url}
            name={profile.name}
            login={profile.login}
            company={profile.company}
            location={profile.location}
            public_repos={profile.public_repos}
            followers={profile.followers}
            following={profile.following}
        />
    )
);

export default GitHubAccountList;
