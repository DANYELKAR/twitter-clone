import React, { useState } from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "../firebase";

const TweetBox = () => {
  const [tweetMessage, setTwitterMessage] = useState("");
  const [tweetImage, setTwitterImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Muhammed Güven",
      username: "muhammedguven",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1407880792609636354/lwj9DjrJ_400x400.jpg",
    });
    setTwitterMessage("");
    setTwitterImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweet-input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEezoJeAOBu-g/profile-displayphoto-shrink_100_100/0/1612465594176?e=1653523200&v=beta&t=8D_jqBhZC20quSZjg4QoTPHmP3y9xzc2YgncRBy3i8g" />
          <input
            onChange={(e) => setTwitterMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What happening dude?"
          />
        </div>
        <input
          onChange={(e) => setTwitterImage(e.target.value)}
          value={tweetImage}
          className="tweetBox-ImageInpput"
          placeholder="Optinal: Enter a URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox-button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
