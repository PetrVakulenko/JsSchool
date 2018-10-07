export const getGHProfileInfo = (
  { id, name, login, avatar_url, company, location, public_repos, followers, following, bio }) => ({
    id, name, login, avatar_url, company, location, public_repos, followers, following, bio
  }
);

export const rejectProfileInfo = () => (
  {
    id: null,
    name: '',
    login: '',
    avatar_url: '',
    company: '',
    location: '',
    public_repos: '',
    followers: '',
    following: '',
    bio: ''
  }
);

export const fetchGHProfile = url => (
  fetch(url)
    .then(res => res.json())
    .then(getGHProfileInfo)
    .catch(rejectProfileInfo)
);
