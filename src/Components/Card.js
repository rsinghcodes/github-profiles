import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img
          src={props.person.avatar_url}
          alt={props.person.name}
          className="avatar"
        />
      </div>
      <div className="user-info">
        <h2>{props.person.name}</h2>
        <p>{props.person.bio}</p>
        <ul>
          <li>
            {props.person.followers} <strong>Followers</strong>
          </li>
          <li>
            {props.person.following} <strong>Following</strong>
          </li>
          <li>
            {props.person.public_repos} <strong>Repos</strong>
          </li>
        </ul>
        <div id="repos">
          {props.repos.slice(0, 5).map((repo) => {
            return (
              <a href={repo.html_url} className="repo">
                {repo.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
