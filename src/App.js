import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Users />
      </div>
    );
  }
}

export default App;
