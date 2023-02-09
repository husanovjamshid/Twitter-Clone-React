import search from "../../../assets/img/search.svg";
import './tSearch.scss'
export const SearchTrens = () => {
  return (
    <div className="search__stick">
      <form className="trends__form">
        <div className="input-group d-flex gap-3">
          <img width="23px" src={search} alt="" />
          <input
            className="trends__input"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </form>
    </div>
  );
};
