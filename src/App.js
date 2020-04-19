import React from 'react';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';

import LoadingIcon from './components/LoadingIcon/LoadingIcon';

import './App.css';

import fetchUrl from './utils/fetchUrl';

class App extends React.Component {

  state = {
    users: [],
    loading: false,
    showClearUsers: false,
  };

  handleSubmit = searchValue => {
    this.setState({ users: [], loading: true });
    fetchUrl('https://api.github.com/search/users?q=' + searchValue)
      .then(res => res.json())
      .then(results => {
        this.setState({ users: results.items, loading: false, showClearUsers: !!results.items.length });
      })
      .catch(console.error);
  };

  clearUsers = () => this.setState({ users: [], showClearUsers: false });

  render() {
    return (
      <div className="app">
        <NavBar />
        <SearchBar 
          handleSubmit={this.handleSubmit} 
          clearUsers={this.clearUsers}
          showClearUsers={this.state.showClearUsers}
        />
        { this.state.loading && <LoadingIcon /> }
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
