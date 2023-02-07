import stars from "../../../assets/img/stars.svg";
import "./header.scss";
export const Header = () => {
  return (
    <>
      <header className="tweets__header px-2">
        <nav>
          <ul className="list-unstyled d-flex align-items-center justify-content-between">
            <li className="header__title">Home</li>
            <li>
              <img className="img-fluid" src={stars} alt="" />
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};
