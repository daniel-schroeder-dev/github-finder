import React from 'react';
import './UserProfileCard.css';

function UserProfileCard(props) {
  return (
    <article>
      <section>
        <img src="" alt="" />
        <h1>Name</h1>
        <p>Location</p>
        <p>Hireable</p>
      </section>
      <section>
        <h2>Bio</h2>
        <p>Bio text</p>
        <button type="button">Visit GitHub Profile</button>
        <p>Username: foo_theB@r</p>
        <p>Company: Bar Industries</p>
        <p>Website: www.baz.com</p>
      </section>
      <section>
        <p>Followers: 1234</p>
        <p>Following: 21</p>
        <p>Public Repos: 481</p>
        <p>Public Gists: 12</p>
      </section>
    </article>
  );
}

export default UserProfileCard;
