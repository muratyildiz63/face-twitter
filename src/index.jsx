import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { TweetProvider } from "./contexts/tweetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TweetProvider>
    <App />
  </TweetProvider>
);
