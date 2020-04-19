import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar/SearchBar';
import Users from '../../components/Users/Users';

import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';

import './HomePage.css';

function HomePage(props) {
  return (
    <main>
      <SearchBar 
        handleSubmit={props.handleSubmit} 
        clearUsers={props.clearUsers}
        showClearUsers={props.showClearUsers}
      />
      { props.loading && <LoadingIcon /> }
      <Users users={props.users} />
    </main>
  );
}

HomePage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearUsers: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

export default HomePage;
