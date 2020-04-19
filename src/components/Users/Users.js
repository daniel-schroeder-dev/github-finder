import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/UserCard';

import './Users.css';

function Users(props) {
  return (
    <section className="users">
      { props.users.length ? props.users.map(user => (<UserCard key={user.id} {...user} />)) : null }
    </section>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
