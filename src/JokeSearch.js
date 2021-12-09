import { useState } from "react";
import "./jokesearch.css";
const JokeSearch = () => {
  const [searchValue, setSearchValue] = useState(" ");
  const [searchJokes, setSearchJokes] = useState([]);
  const findJoke = (e) => {
    e.preventDefault();
    fetch(`https://ft-jokes-backend.herokuapp.com/search?text=${searchValue}`)
      .then((response) => response.json())
      .then((data) => setSearchJokes(data));
  };

  return (
    <div>
      <form onSubmit={findJoke}>
        <label htmlFor="text">search</label>
        <input
          className="form__input"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="Button" type="submit">
          submit
        </button>
      </form>
      {searchJokes.map((joke) => {
        return (
          <p className="p-style" key={joke}>
            {joke}
          </p>
        );
      })}
    </div>
  );
};

export default JokeSearch;
