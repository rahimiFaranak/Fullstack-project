import { useState, useEffect } from "react";
import "./jokesBycategory.css";
const JokesByCategory = () => {
  const [jokeCategory, setJokeCategory] = useState([]);
  const [jokesshow, setJokesshow] = useState([]);
  const [valueOfButton, setValueOfButton] = useState([]);
  useEffect(() => {
    fetch(`https://ft-jokes-backend.herokuapp.com/categories`)
      .then((response) => response.json())
      .then((data) => setJokeCategory(data));
  }, []);
  useEffect(() => {
    fetch(
      `https://ft-jokes-backend.herokuapp.com/by-category?name=${encodeURIComponent(
        valueOfButton
      )}`
    )
      .then((response) => response.json())
      .then((data) => setJokesshow(data));
  }, [valueOfButton]);

  return (
    <div>
      {jokeCategory.map((categorie) => {
        return (
          <button
            key={categorie}
            id={categorie}
            onClick={(e) => setValueOfButton(e.target.id)}
          >
            {categorie}
          </button>
        );
      })}
      {jokesshow.map((joke) => {
        return <p key={joke}>{joke}</p>;
      })}
      ;
    </div>
  );
};
export default JokesByCategory;
