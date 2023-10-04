import { useRef } from "react";
import "./SearchField.css";
import searchIcon from "../../img/search-icon.png";

function SearchField() {
  function searchBtnClick() {
    console.log(inputRef.current.value); // getting data from value in search input
  }
  const inputRef = useRef(null);
  return (
    <div className="search-frame">
      <div className="caption">
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search"
          id="INPUTED"
        ></input>
      </div>
      <div>
        <button className="search-btn" onClick={searchBtnClick}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default SearchField;
