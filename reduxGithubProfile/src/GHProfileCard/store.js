export const SAVE_TYPE = 'PROFILE::SAVE';

export const save = profile => ({
  type: SAVE_TYPE, payload: profile,
});

export const initialState = {
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
};

const profile = (state = initialState, { type, payload }) => (
  type === SAVE_TYPE
    ? ({ ...state, ...payload })
    : state
);

export default { profile };

export const getGHProfile = state => state.profile;
