import { Link } from "react-router-dom";

import "./followings.css";

export default function Follwoings({friends}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

  return (
    <div>
      {friends.map((friend) => (
        <Link to={"/profile/" + friend.username} style={{textDecoration: "none"}}>
          <div className="rightbarFollowing">
            <img
              src={
                friend.profilePicture
                  ? PF + friend.profilePicture
                  : PF + "noprofile.jpg"
              }
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
