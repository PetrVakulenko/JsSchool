import { save } from './store';
import { fetchGHProfile } from './GhProfile';

export const loadGHProfile = url => fetchGHProfile(url).then(save);
// -> Promise.resolve({ type: SAVE_TYPE, payload: { ...book } })
