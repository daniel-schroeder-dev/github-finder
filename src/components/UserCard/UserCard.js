import React from 'react';
import PropTypes from 'prop-types';

import './UserCard.css';

class UserCard extends React.Component {
  render() {
    return (
      <article className="user-card">
        <img className="user-card__avatar" src={this.props.avatar_url} alt="user avatar" />
        <h2 className="user-card__login">{this.props.login}</h2>
        <a className="user-card__html-url" href={this.props.html_url}>More</a>
      </article>
    );
  } 
}

UserCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default UserCard;
