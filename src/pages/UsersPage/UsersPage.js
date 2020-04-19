import React from 'react';

import fetchUrl from '../../utils/fetchUrl';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';

import './UsersPage.css';

class UsersPage extends React.Component {

  state = {
    user: null,
  };

  componentDidMount() {
    fetchUrl(`https://api.github.com/users/${this.props.match.params.login}`)
      .then(res => res.json())
      .then(user => this.setState({ user }))
      .catch(console.error);
  }

  /*
  left-section: image, name, location
  right-section: bio, ghprofile link, username, company, website
  badges: followers, following, public_repos, public_gists
  */

  render() {
    return (
      <main>
        { this.state.user ? <UserProfileCard /> : <LoadingIcon /> }
      </main>
    );
  }

}

export default UsersPage;
