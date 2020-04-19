import React from 'react';

import fetchUrl from '../../utils/fetchUrl';

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

  render() {
    return (
      <main>
        UsersPage for: { this.state.user ? this.state.user.login : null }
      </main>
    );
  }

}

export default UsersPage;
