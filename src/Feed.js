import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {/*Tweet Box*/}
      <TweetBox />

      {/*Post*/}
      <Post
        displayName="Danyel Kar"
        username="kardanyel"
        verified={true}
        text="hey beatch is working !!"
        avatar="https://media-exp1.licdn.com/dms/image/C4E03AQEezoJeAOBu-g/profile-displayphoto-shrink_100_100/0/1612465594176?e=1653523200&v=beta&t=8D_jqBhZC20quSZjg4QoTPHmP3y9xzc2YgncRBy3i8g"
        image="https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif"
      />
    </div>
  );
};

export default Feed;
