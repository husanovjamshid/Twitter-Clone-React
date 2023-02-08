import { Buttons } from "../Buttons/Buttons";
import { Trends } from "../Trends/Trends";
import { Tweets } from "../Tweets/Tweets";
import "./main.scss";
import '../../Fonts/Fonts.scss'
export const Main = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="buttons__page border-end position-sticky sticky-top p-0 pt-2">
          <Buttons />
        </div>
        <div className="tweets__page p-0 pt-2">
          {" "}
          <Tweets />
        </div>
        <div className="trends__page p-0 pt-2 border-start ">
          <Trends />
        </div>
      </div>
    </>
  );
};
