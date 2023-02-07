import twitter_logo from "../../../assets/img/twitter-logo.svg";
import "./login.scss";
export const Login = () => {
  return (
    <>
      <div className="login my-5 position-relative">
        <div className="login__wrapper ">
          <img width="50px" className="twitter__logo" src={twitter_logo} alt="" />
          <h2 className="login__title">Log in to Twitter</h2>
          <form className="login__form">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <a className="login__link">Log In</a>
            <p className="d-flex align-items-center justify-content-between ignore__login">
              <span>Forgot password?</span>
              <span>Sign up to Twitter</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
