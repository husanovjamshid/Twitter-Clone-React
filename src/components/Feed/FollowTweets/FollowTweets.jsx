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
      <div className="tweet__wrapper px-4">
        <ul className="list-unstyled m-0 p-0">
          <li>
            <div className="row">
              <div className="col-md-1">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="col-md-10">
                <p className="follow__user-info">
                  {" "}
                  <span className="tweet__title m-0">Trend-Alexandr </span> <span className="tweet__desc m-0 ms-1">@j_husanov</span>{" "}
                  <span className="tweet__desc m-0 ms-1">·</span> <span className="tweet__desc m-0 ms-1">Feb 7</span>
                </p>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center gap-5 mt-4 follow__icons">
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
              <div className="col-md-1 position-relative">
                <img
                  className="position-absolute end-0 bg-muted"
                  src={burger}
                  alt=""
                />
              </div>
              <span className="line"></span>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-md-1">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="col-md-10">
                <div className="d-flex gap-2">
                  <p className="tweet__title m-0">Jamshidbek Husanov</p>
                  <p className="tweet__desc m-0">@j_husanov </p>
                  <span className="tweet__desc">·</span>
                  <p className="tweet__desc m-0">25m</p>
                </div>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center gap-5 mt-4 follow__icons">
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
              <div className="col-md-1 position-relative">
                <img
                  className="position-absolute end-0 bg-muted"
                  src={burger}
                  alt=""
                />
              </div>
              <span className="line"></span>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-md-1">
                <img width="40px" src={avatar} alt="" />
              </div>
              <div className="col-md-10">
                <div className="d-flex gap-2">
                  <p className="tweet__title m-0">Jamshidbek Husanov</p>
                  <p className="tweet__desc m-0">@j_husanov </p>
                  <span className="tweet__desc">·</span>
                  <p className="tweet__desc m-0">25m</p>
                </div>
                <p className="tweets__desc m-0">
                  YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                  Mentorlik davomida talaba va yangi bitiruvchilarni
                  o’sayotganini ko’rib hursand bo’ladi odam.
                </p>
                <div className="d-flex align-items-center gap-5 mt-4 follow__icons">
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
              <div className="col-md-1 position-relative">
                <img
                  className="position-absolute end-0 bg-muted"
                  src={burger}
                  alt=""
                />
              </div>
              <span className="line"></span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
