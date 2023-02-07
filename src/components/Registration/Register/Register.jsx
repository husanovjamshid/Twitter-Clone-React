import axios from "axios";
import "./register.scss";
import twitter_logo from "../../../assets/img/twitter-logo.svg";

export const Register = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  let currentDay = new Date()
  let oldYear = new Date(null)
  let years = [];
  for (let i = oldYear.getFullYear(); i <= currentDay.getFullYear(); i++) {
    years.push(i);
  }

  // console.log(newss.getFullYear());

  // const options = {
  //   method: "GET",
  //   url: "https://twitter135.p.rapidapi.com/Search/",
  //   params: { q: "kunuznews", count: "152" },
  //   headers: {
  //     "X-RapidAPI-Key": "98719646camsh6b7bc9f3e16995bp122476jsnb369fdf02bd7",
  //     "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return (
    <>
      <div className="register">
        {" "}
        <div className="register my-5 position-relative">
          <div className="register__wrapper ">
            <img
              width="40px"
              className="twitter__logo d-block m-auto"
              src={twitter_logo}
              alt=""
            />
            <h2 className="register__title">Create an account</h2>
            <form className="register__form">
              <input className="form-control" type="text" placeholder="Name" />
              <input
                className="form-control"
                type="number"
                placeholder="Phone number"
              />
              <p className="d-flex align-items-center justify-content-between ignore__register">
                <span>Use email</span>
              </p>
              <p className="birthday">Date of birth</p>
              <div>
                <div className="d-flex justify-content-between">
                  <select
                    className="form-selects"
                    aria-label="Default select example"
                  >
                    <option disabled selected>Month</option>
                    {monthNames.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                  <select
                    className="form-selects-2"
                    aria-label="Default select example"
                  >
                    <option disabled selected>Day</option>
                    {days.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                  <select
                    className="form-selects-3"
                    aria-label="Default select example"
                  >
                    <option disabled selected>Year</option>
                    {years.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <a className="register__link">Next</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
