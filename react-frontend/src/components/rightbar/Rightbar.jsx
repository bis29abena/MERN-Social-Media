import React from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Users } from "../../dummdata.js";

import Online from "../online/Online";

import "./rightbar.css";

export default function Rightbar({profile}) {
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
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kumasi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Ghana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/persons/bismark.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bismark Osei</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFolloingName">Bismark Osei</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bismark Osei</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bismark Osei</span>
          </div>
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
