import React from 'react';

class GHUserProfileInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: props.avatar_url,
      login: props.login,
      company: props.company,
      location: props.location,
      bio: props.bio,
      name: props.name,
      public_repos: props.public_repos,
      followers: props.followers,
      following: props.following,
    }
  }

  changeName = ({ target }) => this.setState({
    name: target.value,
  });

  changeLogin = ({ target }) => this.setState({
    login: target.value,
  });

  changeCompany = ({ target }) => this.setState({
    company: target.value,
  });

  changeLocation = ({ target }) => this.setState({
    location: target.value,
  });

  changeBio= ({ target }) => this.setState({
    bio: target.value,
  });

  handleSubmit(event) {
    const { onChange, toggleView } = this.props;
    event.preventDefault();

    if (typeof onChange !== 'function') return;
    onChange(this.state);
    toggleView();
  }

  render() {
    const { login, name, company, location, bio, avatar_url } = this.state;
    const { toggleView } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="left-side">
            <img
                className="card-img-top"
                src={avatar_url}
                alt={name}
            />
        </div>
        <div className="right-side">
            <div className="form-group">
              <label htmlFor="ghName">Login</label>
              <input
                type="text"
                className="form-control"
                id="ghName"
                placeholder="Enter name"
                value={name}
                onChange={this.changeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ghLogin">Name</label>
              <input
                type="text"
                className="form-control"
                id="ghLogin"
                placeholder="Enter login"
                value={login}
                onChange={this.changeLogin}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ghCompany">Company</label>
              <input
                type="text"
                className="form-control"
                id="ghCompany"
                placeholder="Enter company"
                value={(company ? company : '')}
                onChange={this.changeCompany}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ghLocation">Location</label>
              <input
                type="text"
                className="form-control"
                id="ghLocation"
                placeholder="Enter location"
                value={(location ? location : '')}
                onChange={this.changeLocation}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ghBio">Bio</label>
              <textarea
                className="form-control"
                id="ghBio"
                placeholder="Enter bio"
                value={(bio ? bio : '')}
                onChange={this.changeBio}
              />
            </div>
            <div className="form-group">
              <button
                type="reset"
                onClick={toggleView}
                className="btn btn-danger"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
        </div>
      </form>
    );
  }
}

export default GHUserProfileInfoForm;
