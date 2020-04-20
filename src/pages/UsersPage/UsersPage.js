import React from 'react';

import fetchUrl from '../../utils/fetchUrl';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';

import './UsersPage.css';

class UsersPage extends React.Component {

  state = {
    user: null,
    repos: [],
  };

  componentDidMount() {
    fetchUrl(`https://api.github.com/users/${this.props.match.params.login}`)
      .then(res => res.json())
      .then(user => this.setState({ user }))
      .catch(console.error);
    fetchUrl(`https://api.github.com/users/${this.props.match.params.login}/repos?per_page=5&sort=created:asc`)
      .then(res => res.json())
      .then(repos => this.setState({ repos }))
      .catch(console.error);
  }

  render() {
    return (
      <main>
        { this.state.user ? <UserProfileCard user={this.state.user} repos={this.state.repos} /> : <LoadingIcon /> }
      </main>
    );
  }

}

export default UsersPage;
