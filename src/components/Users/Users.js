import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/UserCard';

import './Users.css';

class Users extends React.Component {
  render() {
    return (
      <section className="users">
        {this.props.users.length ? this.props.users.map(user => (<UserCard key={user.id} {...user} />)) : null }
      </section>
    );
  } 
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
