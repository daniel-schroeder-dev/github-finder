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

  handleSubmit = searchValue => {
    fetchUrl('https://api.github.com/search/users?q=' + searchValue)
      .then(res => res.json())
      .then(results => {
        this.setState({ users: results.items });
      })
      .catch(console.error);
  };

  render() {
    return (
      <div className="app">
        <NavBar />
        <SearchBar handleSubmit={this.handleSubmit} />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
