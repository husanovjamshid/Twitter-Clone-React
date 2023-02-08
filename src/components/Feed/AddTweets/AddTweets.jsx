import avatar from "../../../assets/img/avatar.png";
import "./addTweets.scss";
import image from "../../../assets/img/image.svg";
import gif from "../../../assets/img/gif.svg";
import stat from "../../../assets/img/stats.svg";
import emoji from "../../../assets/img/smile.svg";
import date from "../../../assets/img/date.svg";

export const AddTweets = () => {
  return (
    <>
      <div className="add__wrapper px-3">
        <div className="row">
          <div className="col-md-1">
            <img width="40px" src={avatar} alt="" />
          </div>
          <div className="col-md-7">
            <form className="tweets__form-area">
              <textarea
                className="tweets__area"
                placeholder="What’s happening"
              ></textarea>

              <div className="d-flex gap-2">
                <img className="stikers" width="30px" src={image} alt="" />
                <img
                  className="stikers img-fluid"
                  width="30px"
                  src={gif}
                  alt=""
                />
                <img
                  className="stikers img-fluid"
                  width="30px"
                  src={stat}
                  alt=""
                />
                <img
                  className="stikers img-fluid"
                  width="30px"
                  src={emoji}
                  alt=""
                />
                <img
                  className="stikers img-fluid"
                  width="30px"
                  src={date}
                  alt=""
                />
              </div>
            </form>
          </div>
          <div className="col-md-4 position-relative">
            <a href="#" className="addTweet__link ">
              Tweet
            </a>
          </div>
        </div>
      </div>

      <span className="line"></span>
    </>
  );
};
