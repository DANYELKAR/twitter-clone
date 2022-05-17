import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "../styles/Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="postBox" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-header-text">
              <h3>
                {displayName}
                <span className="post-headerSpecial">
                  {verified && <VerifiedUserIcon className="post-badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post-header-description">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
