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
      <div className="d-flex justify-content-between">
        <div className="buttons__page border-end  p-0 pt-2">
          <div className="buttons__page-wrap ">
            {" "}
            <Buttons />
          </div>
        </div>
        <div className="tweets__page p-0 ">
          {" "}
          <Tweets />
        </div>
        <div className="trends__page p-0  border-start ">
          <Trends />
        </div>
      </div>
    </>
  );
};
