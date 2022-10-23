import axios from "axios"
import { useEffect, useState } from "react";

import "./conversation.css";



export default function Conversation({ conversations, currentUser }) {

  const [friend, setFriend] = useState(null);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversations.members.find(m => m !== currentUser._id);

    const getFriends = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setFriend(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends()
  }, [conversations, currentUser]);

  return (
    <div className="conversation">
      <div className="conversationWrapper">
        <img
          src={
            friend?.profilePicture
              ? friend?.profilePicture
              : `${PF}/noprofile.jpg`
          }
          alt=""
          className="conversationImg"
        />
        <span className="conversationName">{friend?.username}</span>
      </div>
    </div>
  );
}
