import avatar from "../../../assets/img/avatar.png";
import "./followTweets.scss";
import burger from "../../../assets/img/avatar-vector.svg";
import message from "../../../assets/img/comment.svg";
import retweet from "../../../assets/img/retweet.svg";
import like from "../../../assets/img/like.svg";
import share from "../../../assets/img/share.svg";
import statistic from "../../../assets/img/statistics.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export const FollowTweets = () => {
  const [tweet, setTweet] = useState([]);

  const tweets = async () => {
    const options1 = {
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/UserTweets/",
      params: { id: "151484298", count: "18" },
      headers: {
        "X-RapidAPI-Key": "b00df49919mshe4d672a909f1614p12fcf6jsnbe0efce33fb9",
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    };
    axios
      .request(options1)
      .then((data) => {
        if (data) {
          setTweet(
            data.data.data.user.result.timeline.timeline.instructions[1].entries
          );
          console.log(
            data.data.data.user.result.timeline.timeline.instructions[1].entries
          );
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // content.itemContent.tweet_results.result.legacy

  useEffect(() => {
    tweets();
  }, []);

  return (
    <>
      <div className="tweet__wrapper px-3">
        {tweet.length ? (
          <ul className="list-unstyled m-0 p-0">
            {tweet.map((item) =>
              item.content.itemContent?.tweet_results ? (
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="follow__avatar">
                      <img
                        className="rounded-pill"
                        width="40px"
                        src={
                          item.content.itemContent?.tweet_results?.result?.core
                            .user_results.result.legacy.profile_image_url_https
                        }
                        alt=""
                      />
                    </div>
                    <div className="follow__comments">
                      <p className="follow__user-info m-0">
                        {" "}
                        <span className="tweet__title m-0">
                          {item.content.itemContent?.tweet_results?.result?.core
                            .user_results.result.legacy.name
                            ? item.content.itemContent?.tweet_results?.result
                                ?.core.user_results.result.legacy.name
                            : ""}
                        </span>{" "}
                        <span className="tweet__desc m-0 ms-1">
                          @
                          {
                            item.content.itemContent?.tweet_results?.result
                              ?.core.user_results.result.legacy.screen_name
                          }
                        </span>{" "}
                        <span className="tweet__desc m-0 ms-1">·</span>{" "}
                        <span className="tweet__desc m-0 ms-1">
                          {item.content?.itemContent?.tweet_results?.result?.legacy?.created_at
                            .toString()
                            .substring(3, 10)}
                        </span>
                      </p>
                      <p className="tweets__desc m-0">
                        {
                          item.content?.itemContent?.tweet_results?.result
                            ?.legacy?.full_text
                        }
                      </p>
                      {item.content?.itemContent?.tweet_results?.result?.legacy
                        ?.entities.media ? (
                        <img
                          className="follow__img-res rounded-4 img-fluid mt-3"
                          width=""
                          height=""
                          src={
                            item.content?.itemContent?.tweet_results?.result
                              ?.legacy?.entities.media[0].media_url_https
                          }
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                     
                      <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                        <div className="d-flex align-items-center gap-2 commets">
                          <img
                            className="comments"
                            width="30px"
                            src={message}
                            alt=""
                          />
                          <span>
                            {
                              item.content.itemContent?.tweet_results?.result
                                ?.legacy?.reply_count
                            }
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2 commets">
                          <img
                            className="comments"
                            width="30px"
                            src={retweet}
                            alt=""
                          />
                          <span>
                            {" "}
                            {
                              item.content.itemContent?.tweet_results?.result
                                ?.legacy?.retweet_count
                            }
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2 commets">
                          <img
                            className="comments like"
                            width="30px"
                            src={like}
                            alt=""
                          />
                          <span>
                            {
                              item.content.itemContent?.tweet_results?.result
                                ?.legacy?.favorite_count
                            }
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2 commets">
                          <img
                            className="comments"
                            width="30px"
                            src={share}
                            alt=""
                          />
                        </div>
                        <div className="d-flex align-items-center gap-2 commets">
                          <img
                            className="comments"
                            width="30px"
                            src={statistic}
                            alt=""
                          />
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                    <div className="follow__burger position-relative">
                      <img
                        className="position-absolute end-0 bg-muted"
                        src={burger}
                        alt=""
                      />
                    </div>
                  </div>
                  <span className="line"></span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
