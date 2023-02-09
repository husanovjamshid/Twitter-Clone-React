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

export const Buttons = () => {
  return (
    <>
      <div className="buttons__wrapper px-2">
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
        <div className="d-flex align-items-center gap-4 mt-5 ">
          <div className="d-flex align-items-center ">
            <img width="35px" src={avatar} alt="" />
            <div className="ms-3">
              <p className=" m-0 user__name">Akbarjon Ahmadjonov</p>
              <p className=" m-0 user__subname">@bobur_mavlonov</p>
            </div>
          </div>
          <img src={burger} alt="" />
        </div>
      </div>
    </>
  );
};
