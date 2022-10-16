import React from "react";

import "./friends.css";

export default function Friends({friends}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={PF+friends.profilePicture}
          alt="/assets/person/janedoe.jpg"
          className="sidebarFriendImg"
        />
        <span className="siebarFriendName">{friends.username}</span>
      </li>
    </div>
  );
}
