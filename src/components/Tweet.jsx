import React from 'react'
import { useTweet } from '../contexts/tweetContext'
function Tweet() {
  const {tweet}= useTweet()
  const tweetFormat =(_tweet)=>{
    _tweet=_tweet
    .replace(/@([\w]+)/g,'<span>@$1</span>')
    .replace(/#([\wşçöğİiü]+)/gi,'<span>#$1 </span>')
    .replace(/https?:|/|/([\w]+)/,'<span>$1</span>')

    return _tweet
  }
  return (
    <div className="tweet-content">{tweetFormat(tweet)}</div>
  )
}

export default Tweet
