import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="postBox">
      <div className="post-avatar">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEezoJeAOBu-g/profile-displayphoto-shrink_100_100/0/1612465594176?e=1653523200&v=beta&t=8D_jqBhZC20quSZjg4QoTPHmP3y9xzc2YgncRBy3i8g" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              Danyel KAR
              <span className="post-headerSpecial">
                <VerifiedUserIcon className="post-badge" /> @kardanyel
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p> This is my twitter-clone challange !!</p>
          </div>
        </div>
        <img
          src="https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif"
          alt=""
        />
        <div className="post-footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
