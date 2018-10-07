import { createStore } from 'redux';
import { userFormApp } from './reducers';

export const store = createStore(userFormApp);
