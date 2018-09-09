import React from 'react';
import GitHubAccountPreview from './GitHubAccountPreview';

import profiles from './profiles.json';

const GitHubAccountList = () => profiles.map(
    profile => (
        <GitHubAccountPreview
            key={profile.login}
            login={profile.login}
            avatar_url={profile.avatar_url}
            url={profile.url}
            site_admin={profile.site_admin}
        />
    )
);

export default GitHubAccountList;
