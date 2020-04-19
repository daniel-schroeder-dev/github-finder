import React from 'react';
import PropTypes from 'prop-types';

import ClearUsersButton from '../ClearUsersButton/ClearUsersButton';


import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchValue: '',
  };

  handleChange = e => this.setState({ searchValue: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input className="search-bar__search-input" type="search" name="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search users" />
        <div>
          <button className="search-bar__search-button" type="submit">Search</button>
          { this.props.users.length ? <ClearUsersButton clearUsers={this.props.clearUsers} /> : null }
        </div>
      </form>
    );
  }

}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default SearchBar;
