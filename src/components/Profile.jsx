import React from "react";
import { VerifiedIcon } from "../icons";
import { useTweet } from "../contexts/tweetContext";

function Profile() {
  const { name, username,avatar } = useTweet();
  return (
    <div className="tweet-profile">
      <picture>
        <img
          src={avatar ? avatar : "https://st4.depositphotos.com/14903220/24649/v/950/depositphotos_246499748-stock-illustration-abstract-sign-avatar-women-icon.jpg"}
          alt={name}
          width="40"
          height="40"
        />
      </picture>
      <div className="tweet-profile-names">
        <div className="tweet-profile-names-name">
          {name} <VerifiedIcon />
        </div>
        <div className="tweet-profile-names-username">{username}</div>
      </div>
    </div>
  );
}

export default Profile;
