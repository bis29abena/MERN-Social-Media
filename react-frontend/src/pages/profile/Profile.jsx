import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import axios from "axios";

import "./profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture ? user.coverPicture : PF+"nocover.jpg"}
                alt=""
                className="profileCoverPicture"
              />
              <img
                src={user.profilePicture ? user.profilePicture : PF+"noprofile.jpg"}
                alt=""
                className="profileImg"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar profile={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
