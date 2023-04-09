import React from "react";
import PropTypes from "prop-types";

//Styles
import "./Repo.scss";

const Repo = ({ repos, user }) => {
  const name = user.length !== 0 ? user.data.name : "";
  const userName = user.length !== 0 ? user.data.login : "";
  const avatarUrl = user.length !== 0 ? user.data.avatar_url : "";
  const location = user.length !== 0 ? user.data.location : "";
  const bio = user.length !== 0 ? user.data.bio : "";

  const reposList =
    repos.length !== 0 ? (
      repos.data.map((item) => <li className="Repo-ListItem">{item.name}</li>)
    ) : (
      <p className="nothingFound">No repos found!</p>
    );

  return (
    <>
      <div className="Repo">
        <div className="Repo-NameWrapper1">
          {avatarUrl && <img src={avatarUrl} className="Repo-Img"></img>}
          {name && <p className="Repo-Name">Name:</p>}
          <p>{name}</p>
        </div>
        <div className="Repo-NameWrapper2">
          {userName && <p className="Repo-Name">Username:</p>}
          <p>{userName}</p>
        </div>
        <div className="Repo-NameWrapper2">
          {location && <p className="Repo-Name">Location:</p>}
          <p>{location}</p>
        </div>
        <div className="Repo-NameWrapper2">
          {bio && <p className="Repo-Name">Bio:</p>}
          <p>{bio}</p>
        </div>
        <ol className="Repo-List">{reposList}</ol>
      </div>
    </>
  );
};

Repo.propTypes = {
  repos: PropTypes.node,
  user: PropTypes.node,
};

export default Repo;
