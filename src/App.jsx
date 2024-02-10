import {
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
} from "./icons";

import Profile from "./components/Profile";
import Update from "./components/Update";
import Tweet from "./components/Tweet";
import { useTweet } from "./contexts/tweetContext";

function App() {



  const { save, like, comment, retweet,tweetRef } = useTweet();
  const formatNumber = (number) => {
    if (number < 1000) {
      return number;
    }
    number /= 1000;
    number = String(number).split(".");
    return (
      number[0] + (number[1] > 100 ? "," + number[1].slice(0, 1) + "B" : "B")
    );
  };
  return (
    <div className="container">
      <Update />
      <div className="tweet" ref={tweetRef}>
        <Profile />
        <Tweet />
        <div className="tweet-status">
          <div className="tweet-status-item">
            <CommentIcon /> {formatNumber(comment)}
          </div>
          <div className="tweet-status-item">
            <RetweetIcon /> {formatNumber(retweet)}
          </div>
          <div className="tweet-status-item">
            <LikeIcon />
            {formatNumber(like)}
          </div>
          <div className="tweet-status-item">
            <SaveIcon /> {formatNumber(save)}
          </div>
          <div className="tweet-status-item">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
