import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Bis29-Socail</span>
      </div>
      <div className="topbarCenter">
        <div className="topbarSearchBar">
          <SearchIcon className="searchIcon"/>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarItems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarItems">
            <NotificationsIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarItems">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/persons/Adwoa.jpeg" alt="profile" className="topbarImg" />
      </div>
    </div>
  );
}
