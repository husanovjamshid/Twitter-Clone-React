import { AddTweets } from "../AddTweets/AddTweets";
import { FollowTweets } from "../FollowTweets/FollowTweets";
import { Header } from "../Header/Header";

export const Tweets = () => {
  return (
    <>
      <Header />
      <AddTweets />
      <FollowTweets />
    </>
  );
};
