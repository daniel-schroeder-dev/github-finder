import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchValue: '',
  };

  handleChange = e => this.setState({ searchValue: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.searchValue);
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
