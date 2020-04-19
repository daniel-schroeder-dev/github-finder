import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchValue: '',
    showAlert: false,
  };

  handleChange = e => this.setState({ searchValue: e.target.value, showAlert: false });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue === '') return this.setState({ showAlert: true });
    this.props.handleSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {

    const alert = (
      <React.Fragment>
        <FontAwesomeIcon icon={faExclamationCircle} /> 
        <span className="search-bar__alert__message">You must enter a search term!</span>
      </React.Fragment>
    );

    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <div className="search-bar__alert">{ this.state.showAlert && alert }</div> 
        <input className="search-bar__search-input" type="search" name="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search users" />
        <div>
          <button className="search-bar__search-button" type="submit">Search</button>
          { this.props.showClearUsers && <button className="search-bar__clear-users-button" type="button" onClick={this.props.clearUsers}>Clear</button> }
        </div>
      </form>
    );
  }

}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearUsers: PropTypes.bool.isRequired,
};

export default SearchBar;
