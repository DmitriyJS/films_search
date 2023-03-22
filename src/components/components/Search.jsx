import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState(``);
  const [type, setType] = useState(``);

  function searchStartHandler(e) {
    if (e.key === `Enter`) {
      props.search(search, type);
      return;
    }
    if (e.target.closest(`.search-btn`)) {
      props.search(search, type);
    }
  }

  function typeHandler (e) {
    setType(() => (e.target.value))
    props.search(search, e.target.value);
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="search"
            value={search}
            onKeyDown={searchStartHandler}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="btn search-btn" onClick={searchStartHandler}>
            Search
          </button>
        </div>
        <div className="radio-btns">
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio" value='' checked={type === ``}  onChange={typeHandler} />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio" value='movie' checked={type === `movie`}  onChange={typeHandler} />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio" value='series' checked={type === `series`} onChange={typeHandler}  />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
