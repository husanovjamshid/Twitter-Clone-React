import avatar from "../../../assets/img/avatar.png";
import "./followTweets.scss";
import burger from "../../../assets/img/avatar-vector.svg";
import message from "../../../assets/img/comment.svg";
import retweet from "../../../assets/img/retweet.svg";
import like from "../../../assets/img/like.svg";
import share from "../../../assets/img/share.svg";
import statistic from "../../../assets/img/statistics.svg";

export const FollowTweets = () => {
  return (
    <>
      <div className="tweet__wrapper px-2">
        <ul className="list-unstyled m-0 p-0">
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
          <li>
            <div className="d-flex justify-content-between">
              <div className="follow__avatar">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="follow__comments">
                <p className="follow__user-info m-0">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span>{" "}
                  <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span>{" "}
                  <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center  justify-content-between mt-4 follow__icons">
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={message}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={retweet}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments like"
                      width="30px"
                      src={like}
                      alt=""
                    />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img className="comments" width="30px" src={share} alt="" />
                    <span>21</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 commets">
                    <img
                      className="comments"
                      width="30px"
                      src={statistic}
                      alt=""
                    />
                    <span>21</span>
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
        </ul>
      </div>
    </>
  );
};
