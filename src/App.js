import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';

import './App.css';

class App extends React.Component {

  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://api.github.com/users')
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
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
