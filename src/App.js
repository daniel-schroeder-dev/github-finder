import React from 'react';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';

import './App.css';

import fetchUrl from './utils/fetchUrl';

class App extends React.Component {

  state = {
    users: [],
  };

  componentDidMount() {
    fetchUrl('https://api.github.com/users')
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
