import { LOAD_TYPE, save } from './GHProfileCard/store';
import { fetchGHProfile } from './GHProfileCard/GhProfile';
import createInterceptor from './intercept-middleware';

export const interceptor = createInterceptor();

interceptor.before(
  (action, store, prevent) => {
    if (action.type !== LOAD_TYPE) return;
    if (/dle2BgAAQBAJ/.test(action.payload)) {
      console.log('Prevented', action);
      prevent();
      return;
    }
    fetchGHProfile(action.payload)
      .then(save)
      .then(store.dispatch)
  }
);
