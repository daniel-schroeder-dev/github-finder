import React from 'react';
import PropTypes from 'prop-types';

import './UserProfileCard.css';

function UserProfileCard({ user, repos }) {
  return (
    <article className="user-profile-card">
      <section className="user-profile-card__section__main">
        <img className="user-profile-card__avatar" src={user.avatar_url} alt="user profile" />
        <h1 className="user-profile-card__name">{user.name}</h1>
        <p className="user-profile-card__location">Location: {user.location}</p>
        <p className="user-profile-card__hireable">Hireable: {user.hireable ? 'yes' : 'no'}</p>
      </section>
      <section className="user-profile-card__section__bio">
        <p className="user-profile-card__bio">{user.bio}</p>
        <a className="user-profile-card__github-link" href={user.html_url}>Visit GitHub Profile</a>
        <p className="user-profile-card__username">Username: {user.login}</p>
        <p className="user-profile-card__company">Company: {user.company}</p>
        <p className="user-profile-card__website">Website: <a className="user-profile-card__website__link" href={user.blog}>{user.blog}</a></p>
      </section>
      <section className="user-profile-card__section__badge">
        <p className="user-profile-card__followers">Followers: {user.followers}</p>
        <p className="user-profile-card__following">Following: {user.following}</p>
        <p className="user-profile-card__repos">Public Repos: {user.public_repos}</p>
        <p className="user-profile-card__gists">Public Gists: {user.public_gists}</p>
      </section>
      <section className="user-profile-card__section__repos">
        <ul>
          {repos.length && repos.map(repo => (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>))}
        </ul>
      </section>
    </article>
  );
}

UserProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};

export default UserProfileCard;
