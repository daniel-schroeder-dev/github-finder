import React from 'react';

import fetchUrl from '../../utils/fetchUrl';

import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchValue: '',
  };

  handleChange = e => this.setState({ searchValue: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    fetchUrl('https://api.github.com/search/users?q=' + this.state.searchValue)
      .then(res => res.json())
      .then(searchResults => {
        console.log(searchResults);
      })
      .catch(console.error);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input className="search-bar__search-input" type="search" name="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search users" />
        <button className="search-bar__search-button" type="submit">Search</button>
      </form>
    );
  }

}

export default SearchBar;
