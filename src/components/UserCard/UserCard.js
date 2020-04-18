import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
  
  state = {
    avatar_url: 'https://avatars2.githubusercontent.com/u/46?v=4',
    profile_url: 'https://github.com/bmizerany',
    username: 'bmizerany',
  };

  render() {
    return (
      <article className="user-card">
        <img className="user-card__avatar" src={this.state.avatar_url} alt="user avatar" />
        <h2 className="user-card__username">{this.state.username}</h2>
        <a className="user-card__profile-link" href={this.state.profile_url}>More</a>
      </article>
    );
  } 

}

export default UserCard;

/*

{
  "login": "bmizerany",
  "id": 46,
  "node_id": "MDQ6VXNlcjQ2",
  "avatar_url": "https://avatars2.githubusercontent.com/u/46?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bmizerany",
  "html_url": "https://github.com/bmizerany",
  "followers_url": "https://api.github.com/users/bmizerany/followers",
  "following_url": "https://api.github.com/users/bmizerany/following{/other_user}",
  "gists_url": "https://api.github.com/users/bmizerany/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bmizerany/subscriptions",
  "organizations_url": "https://api.github.com/users/bmizerany/orgs",
  "repos_url": "https://api.github.com/users/bmizerany/repos",
  "events_url": "https://api.github.com/users/bmizerany/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bmizerany/received_events",
  "type": "User",
  "site_admin": false
}

{
  "login": "mojodna",
  "id": 45,
  "node_id": "MDQ6VXNlcjQ1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/45?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojodna",
  "html_url": "https://github.com/mojodna",
  "followers_url": "https://api.github.com/users/mojodna/followers",
  "following_url": "https://api.github.com/users/mojodna/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojodna/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojodna/subscriptions",
  "organizations_url": "https://api.github.com/users/mojodna/orgs",
  "repos_url": "https://api.github.com/users/mojodna/repos",
  "events_url": "https://api.github.com/users/mojodna/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojodna/received_events",
  "type": "User",
  "site_admin": false
},

{
  "login": "errfree",
  "id": 44,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ0",
  "avatar_url": "https://avatars2.githubusercontent.com/u/44?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/errfree",
  "html_url": "https://github.com/errfree",
  "followers_url": "https://api.github.com/users/errfree/followers",
  "following_url": "https://api.github.com/users/errfree/following{/other_user}",
  "gists_url": "https://api.github.com/users/errfree/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/errfree/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/errfree/subscriptions",
  "organizations_url": "https://api.github.com/users/errfree/orgs",
  "repos_url": "https://api.github.com/users/errfree/repos",
  "events_url": "https://api.github.com/users/errfree/events{/privacy}",
  "received_events_url": "https://api.github.com/users/errfree/received_events",
  "type": "Organization",
  "site_admin": false
},



*/
