import React from "react";
import "./online.css"


export default function Online({online}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              src={PF+online.profilePicture}
              alt=""
              className="rightbarProfileImg"
            />
            <span className="rightbarOnlineBadge"></span>
          </div>
          <span className="rightbarUserName">{online.username}</span>
        </li>
      </ul>
    </div>
  );
}
