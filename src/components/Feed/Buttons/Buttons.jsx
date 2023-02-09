import "./buttons.scss";
import logo from "../../../assets/img/twitter-logo.svg";
import home from "../../../assets/img/home.svg";
import explore from "../../../assets/img/explore.svg";
import notifications from "../../../assets/img/notification.svg";
import messages from "../../../assets/img/messages.svg";
import bookmarks from "../../../assets/img/bookmarks.svg";
import lists from "../../../assets/img/lists.svg";
import profile from "../../../assets/img/profile.svg";
import more from "../../../assets/img/more.svg";
import avatar from "../../../assets/img/avatar.png";
import burger from "../../../assets/img/avatar-vector.svg";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const Buttons = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="buttons__wrapper border-end px-2">
        <div className="brand__logo ms-3">
          <img src={logo} width="30px" alt="" />
        </div>
        <ul className="list-unstyled button__lists">
          <li className="button__item">
            <a className="buttons__link  " href="/">
              <div className="d-flex align-items-center">
                <img width="24px" src={home} alt="" />
                <span className="ms-3">Home</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                {" "}
                <img width="24px" src={explore} alt="" />
                <span className="ms-3">Explore</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                {" "}
                <img width="24px" src={notifications} alt="" />
                <span className="ms-3">Notifications</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                <img width="24px" src={messages} alt="" />
                <span className="ms-3">Messages</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                <img width="24px" src={bookmarks} alt="" />
                <span className="ms-3">Bookmarks</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                {" "}
                <img width="24px" src={lists} alt="" />
                <span className="ms-3">Lists</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                <img width="24px" src={profile} alt="" />
                <span className="ms-3">Profile</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="buttons__link " href="/">
              <div className="d-flex align-items-center">
                {" "}
                <img width="24px" src={more} alt="" />
                <span className="ms-3">More</span>
              </div>
            </a>
          </li>
          <li className="button__item">
            <a className="tweet__link">Tweet</a>
          </li>
        </ul>
        <a className="d-flex align-items-center buttons__avatar gap-4 mt-5 buttons__link">
          <div className="d-flex align-items-center ">
            <img className="rounded-pill" width="35px" src={user.profile_image_url_https} alt="" />
            <div className="ms-3">
              <p className=" m-0 user__name">{user.name}</p>
              <p className=" m-0 user__subname">@{user.screen_name}</p>
            </div>
          </div>
          <img src={burger} alt="" />
        </a>
      </div>
    </>
  );
};
