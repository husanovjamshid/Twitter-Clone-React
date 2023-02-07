import { Buttons } from "../Buttons/Buttons";
import { Trends } from "../Trends/Trends";
import { Tweets } from "../Tweets/Tweets";
import './main.scss'
export const Main = () => {
  return (
    <>
      <div className="row ">
        <div className="col-md-3 buttons__line pt-3">
          <Buttons />
        </div>
        <div className="col-md-6 p-0 pt-3">
          {" "}
          <Tweets />
        </div>
        <div className="col-md-3 pt-3">
          <Trends />
        </div>
      </div>
    </>
  );
};
