import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";

import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/posts/3.jpeg"
                alt=""
                className="profileCoverPicture"
              />
              <img
                src="/assets/persons/Adwoa.jpeg"
                alt=""
                className="profileImg"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Adwoa Owusu Boampong</h4>
                <span className="profileInfoDesc">Hello My friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
