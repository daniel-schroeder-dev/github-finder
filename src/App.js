import React from 'react';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';

import './App.css';

import githubCredentials from './utils/githubCredentials';

class App extends React.Component {

  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://api.github.com/users', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Basic ${githubCredentials}`,
      },
    })
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <SearchBar />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
