import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./chatonline.css";

export default function ChatOnline({
  onlineUsers,
  currentUserId,
  setCurrentChat,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get("/users/friends/" + currentUserId);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [currentUserId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversation/find/${currentUserId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatonline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : `${PF}/noprofile.jpg`
              }
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}
