import React from "react";

import "./friends.css";

export default function Friends({friends}) {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={friends.profilePicture}
          alt="/assets/person/janedoe.jpg"
          className="sidebarFriendImg"
        />
        <span className="siebarFriendName">{friends.username}</span>
      </li>
    </div>
  );
}
