import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {format} from "timeago.js"

import "./message.css"
export default function Message({messages, own}) {
    const [user, setUser] = useState(null)

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
      const getUser = async () => {
        try {
          const res = await axios.get("/user?userId="+messages.senderId)
          setUser(res.data)
        } catch (error) {
          console.log(error);
        }
      }
      getUser()
    }, [messages])

  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img src={user?.profilePicture ? user.profilePicture : `${PF}/noprofile.jpg`} alt="" className="messageImg" />
            <p className="messageText">{messages.text}</p>
        </div>
        <div className="messageBottomDate">{format(messages.createdAt)}</div>
    </div>
  )
}
