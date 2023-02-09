import { AddTweets } from "../AddTweets/AddTweets";
import { FollowTweets } from "../FollowTweets/FollowTweets";
import { Header } from "../Header/Header";
import "./tweets.scss";
export const Tweets = () => {
  return (
    <>
      <div className="header__stick">
        <Header />
      </div>
      <AddTweets />
      <FollowTweets />
    </>
  );
};
