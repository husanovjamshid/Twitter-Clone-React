import "./trends.scss";
import setting from "../../../assets/img/settings.svg";
import burger from "../../../assets/img/avatar-vector.svg";
import avatar from "../../../assets/img/avatar.png";
import { SearchTrens } from "../TrendSearch/TrendSearch";

export const Trends = () => {
  return (
    <>
      <div className="trends__wrapper px-2">
        <SearchTrens />

        <div className="trends__list">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="trends__title m-0">Trends for you</h2>
            <img width="21px" src={setting} alt="" />
          </div>
          <ul className="list-unstyled mt-3">
            <li className="d-flex align-items-start justify-content-between trens__item">
              <div>
                {" "}
                <p className="m-0 trend__follow">Trending in Germany</p>
                <strong className=" trend__revo">Revolution</strong>
                <p className="m-0 trend__follow">50.4K Tweets</p>
              </div>
              <img src={burger} alt="" />
            </li>
            <li className="d-flex align-items-start justify-content-between trens__item">
              <div>
                {" "}
                <p className="m-0 trend__follow">Trending in Germany</p>
                <strong className=" trend__revo">Revolution</strong>
                <p className="m-0 trend__follow">50.4K Tweets</p>
              </div>
              <img src={burger} alt="" />
            </li>
          </ul>
        </div>

        <div className="trends__list">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="trends__title m-0">You might like</h2>
          </div>
          <ul className="list-unstyled mt-3">
            <li className="d-flex align-items-center justify-content-between follows__item">
              <div className="d-flex align-items-center ">
                <img width="35px" src={avatar} alt="" />
                <div className="ms-2">
                  <p className="d-block m-0 user__name">Temurbek Adhamov</p>
                  <p className="d-block m-0 user__subname">@bobur_mavlonov</p>
                </div>
              </div>
              <a className="trends__follows" href="#">
                Follow
              </a>
            </li>
            <li className="d-flex align-items-center justify-content-between follows__item">
              <div className="d-flex align-items-center ">
                <img width="35px" src={avatar} alt="" />
                <div className="ms-2">
                  <p className="d-block m-0 user__name">Temurbek Adhamov</p>
                  <p className="d-block m-0 user__subname">@bobur_mavlonov</p>
                </div>
              </div>
              <a className="trends__follows" href="#">
                Follow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
