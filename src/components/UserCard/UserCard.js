import React from 'react';
import PropTypes from 'prop-types';

import './UserCard.css';

function UserCard(props) {
  return (
    <article className="user-card">
      <img className="user-card__avatar" src={props.avatar_url} alt="user avatar" />
      <h2 className="user-card__login">{props.login}</h2>
      <a className="user-card__html-url" href={props.html_url}>More</a>
    </article>
  );
}

UserCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default UserCard;
