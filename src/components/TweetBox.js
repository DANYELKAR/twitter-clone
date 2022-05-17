import React from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@mui/material";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweet-input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEezoJeAOBu-g/profile-displayphoto-shrink_100_100/0/1612465594176?e=1653523200&v=beta&t=8D_jqBhZC20quSZjg4QoTPHmP3y9xzc2YgncRBy3i8g" />
          <input type="text" placeholder="What happening dude?" />
        </div>
        <input
          className="tweetBox-ImageInpput"
          placeholder="Optinal: Enter a URL"
          type="text"
        />

        <Button className="tweetBox-button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
