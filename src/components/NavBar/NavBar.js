import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './NavBar.css';

class NavBar extends React.Component {
  
  render() {
    return (
      <nav className="nav-bar">

        <h1 className="nav-bar__site-title"><FontAwesomeIcon className="nav-bar__gh-icon" icon={faGithub} />GitHub Finder</h1>
      </nav>
    );
  } 

}

export default NavBar;
