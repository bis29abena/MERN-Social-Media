import React from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Users } from "../../dummdata.js";
import { AuthContext } from "../../context/AuthContext";
import Online from "../online/Online";
import Follwoings from "../following/Follwoings.jsx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./rightbar.css";

export default function Rightbar({ profile }) {
  const [friends, setFriends] = useState([]);
  const { user, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(user.followings.includes(profile?._id));

  useEffect(() => {
    setFollowed(user.followings.includes(profile?._id));
  }, [user, profile]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axios.get("/users/friends/" + profile._id);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, [profile]);

  const followUser = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + profile._id + "/unfollow", {
          userId: user._id,
        });
        dispatch({ type: "UNFOLLOW", payload: profile._id });
      } else {
        await axios.put("/users/" + profile._id + "/follow", {
          userId: user._id,
        });
        dispatch({ type: "FOLLOW", payload: profile._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed)
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CelebrationIcon htmlColor="red" className="birthdayIcon" />
          <span className="birthdayText">
            <b>Bismark Osei</b> and <b>3 other friends</b> have their birthday
            Today
          </span>
        </div>
        <img src="/assets/add.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {Users.filter((user) => user?.online).map((user) => (
          <Online online={user} />
        ))}
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div>
        {profile.username !== user.username && (
          <button className="rightbarFollowButton" onClick={followUser}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{profile.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{profile.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {profile.relationship === 1
                ? "Single"
                : profile.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <Follwoings friends={friends} />
        </div>
      </div>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper"></div>
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
  );
}
