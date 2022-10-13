import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Users } from "../../dummdata.js";

import "./post.css";
import { useState } from "react";

export default function Post({post}) {
  const [likes, setLikes] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = () => {
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImage"
            />
            <span className="postUserName">{Users.filter((user) => user.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon onClick={handleLikes} className="postIcon" htmlColor="blue"/>
            <FavoriteIcon onClick={handleLikes}className="postIcon"htmlColor="red"/>
            <span className="postLikeCounter">{likes} peope like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
