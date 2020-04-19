import React from 'react';
import PropTypes from 'prop-types';

import './ClearUsersButton.css';

function ClearUsersButton(props) {
  return (
    <button className="clear-users-button" type="button" onClick={props.clearUsers}>Clear</button>
  );
}

ClearUsersButton.propTypes = {
  clearUsers: PropTypes.func.isRequired,
};

export default ClearUsersButton;
