import { start, end, isLoading } from '../Loading';
import { save, getGHProfile } from './store';
import { fetchGHProfile } from './GhProfile';

// export const loadGHProfile = url => dispatch => {
//   dispatch(start());
//   fetchGHProfile(url)
//     .finally(() => dispatch(end()))
//     .then(save)
//     .then(dispatch)
// };

export const loadGHProfile = url => async (dispatch, getState) => {
  const state = getState();
  const loadingNow = isLoading(state);
  if (loadingNow) {
    console.log('Currently loading');
    return;
  }

  const currentGHProfile = getGHProfile(state);
  if (currentGHProfile.id) {
    console.log('Already loaded');
    return;
  }

  dispatch(start());
  const profile = await fetchGHProfile(url);
  dispatch(save(profile));
  dispatch(end());
};
