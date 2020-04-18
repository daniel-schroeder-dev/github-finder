import React from 'react';

import NavBar from './components/NavBar/NavBar';
import UserCard from './components/UserCard/UserCard';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <UserCard />
      </div>
    );
  }
}

export default App;
