import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './NavBar.css';

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar__home-page-link" to="/">
        <h1 className="nav-bar__site-title"><FontAwesomeIcon className="nav-bar__gh-icon" icon={faGithub} />GitHub Finder</h1>
      </Link>
    </nav>
  );
}

export default NavBar;
