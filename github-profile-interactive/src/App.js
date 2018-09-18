import React from 'react';
import GHUserProfileInfo from './GHUserProfileInfo';


const App = () => (
  <div className="container">
    <div className="row">
      <GHUserProfileInfo
          url="https://api.github.com/users/PetrVakulenko1"
      />
    </div>
  </div>
);

export default App;
