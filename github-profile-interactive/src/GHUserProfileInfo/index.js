import React from 'react';
import GHUserProfileCard from './GHUserProfileCard';
import GHUserProfileInfoForm from './GHUserProfileInfoForm';
import { pushDataToServer, updateGHUserProfile, fetchGHUserProfile } from './GHUserProfile';

const BI_MODE_VIEW = 'view';
const BI_MODE_EDIT = 'edit';
const BI_MODE_LOAD = 'load';

const isView = mode => (
  mode === BI_MODE_VIEW
);

const isEdit = mode => (
  mode === BI_MODE_EDIT
);

const isLoad = mode => (
  mode === BI_MODE_LOAD
);

class GHUserProfileInfo extends React.Component {
  state = {
    mode: BI_MODE_LOAD,
    data: null
  };

  toggleView = () => this.setState(
    ({ mode }) => ({
      mode: mode === BI_MODE_VIEW
        ? BI_MODE_EDIT
        : BI_MODE_VIEW
    })
  );

  handleGHUserProfileChange = data => {
    this.setState(
      updateGHUserProfile(data)
    );
    pushDataToServer(data)
  };

  loadGHUserProfile() {
    const { url } = this.props;
    fetchGHUserProfile(url)
      .then(this.handleGHUserProfileChange)
      .then(
        () => this.setState({
          mode: BI_MODE_VIEW
        })
      )
  }

  componentDidMount() {
    this.loadGHUserProfile();
  }

  render() {
    const { data, mode } = this.state;
    const handlers = {
      toggleView: this.toggleView,
      onChange: this.handleGHUserProfileChange,
    };

    return (
      isView(mode) ? <GHUserProfileCard {...data} {...handlers} /> :
      isEdit(mode) ? <GHUserProfileInfoForm {...data} {...handlers} /> :
      isLoad(mode) ? 'Loading ...' :
      null
    );
  }
}

export default GHUserProfileInfo;
