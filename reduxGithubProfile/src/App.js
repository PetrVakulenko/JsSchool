import React from "react";
import { Provider } from 'react-redux';

import GHProfileCard from './GHProfileCard';
import { store } from './store';


const AppPure = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1>GitHub User Profile Thunks</h1>
      </div>
    </div>
    <hr />
    <div className="row">
      <GHProfileCard />
    </div>
  </div>
);

const App = () => (
  <Provider store={store}>
    <AppPure />
  </Provider>
);

export default App;
