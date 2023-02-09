import { Buttons } from "../Buttons/Buttons";
import { Trends } from "../Trends/Trends";
import { Tweets } from "../Tweets/Tweets";
import "./main.scss";
import "../../Fonts/Fonts.scss";
import axios from "axios";
export const Main = () => {
  // axios
  //   .get("https://api.twitter.com/2/users/by/username/husanovvjamshid")
  //   .then((data) => console.log(data))
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return (
    <>
      <div className="home__page">
        <div className="buttons__page p-0 ">
          <div className="buttons__page-wrap ">
            {" "}
            <Buttons />
          </div>
        </div>
        <div className="tweets__page p-0 ">
          {" "}
          <Tweets />
        </div>
        <div className="trends__page p-0   ">
          <Trends />
        </div>
      </div>
    </>
  );
};
