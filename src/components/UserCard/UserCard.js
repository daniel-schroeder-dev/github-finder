import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './UserCard.css';

function UserCard(props) {
  return (
    <article className="user-card">
      <img className="user-card__avatar" src={props.avatar_url} alt="user avatar" />
      <h2 className="user-card__login">{props.login}</h2>
      <Link className="user-card__html-url" to={`/users/${props.login}`}>More</Link>
    </article>
  );
}

UserCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default UserCard;
